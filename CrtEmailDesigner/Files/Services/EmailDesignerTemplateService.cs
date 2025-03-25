namespace CrtEmailDesigner.Services
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.ServiceModel;
	using System.ServiceModel.Activation;
	using System.ServiceModel.Web;
	using Common.Logging;
	using CrtEmailDesigner.Contracts;
	using CrtEmailDesigner.Interfaces;
	using CrtEmailDesigner.Repositories;
	using CrtEmailDesigner.Strategy;
	using Terrasoft.Core.Factories;
	using Terrasoft.Core.ServiceModelContract;
	using Terrasoft.Web.Common;

	#region Class: EmailDesignerTemplateService

    /// <summary>
    /// Service for managing email designer templates.
    /// </summary>
    [ServiceContract]
	[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
	public class EmailDesignerTemplateService : BaseService
	{

		#region Fields: Private

		private IBfEmailTemplateRepository _bfEmailTemplateRepository;

		private IBfTemplateLanguageService _bfTemplateLanguageService;

		private ILog _logger;

		#endregion

		#region Properties: Private

		private IBfEmailTemplateRepository BfEmailTemplateRepository =>
			_bfEmailTemplateRepository ?? (_bfEmailTemplateRepository =
				ClassFactory.Get<IBfEmailTemplateRepository>(new ConstructorArgument("userConnection",
					UserConnection)));

		private IBfTemplateLanguageService BfTemplateLanguageService =>
			_bfTemplateLanguageService ?? (_bfTemplateLanguageService =
				ClassFactory.Get<IBfTemplateLanguageService>(new ConstructorArgument("userConnection",
					UserConnection)));

		private ILog Logger => _logger ?? (_logger = LogManager.GetLogger(nameof(EmailDesignerTemplateService)));

		#endregion

		#region Methods: Private

		private IList<EmailDesignerTemplateModel> CreateTemplatesIfAny(Guid emailId, Guid[] languageIds) {
			var createdTemplates = new List<EmailDesignerTemplateModel>();
			if (languageIds.Any())
				createdTemplates.AddRange(BfEmailTemplateRepository.CreateMany(emailId, languageIds));
			return createdTemplates;
		}

		private void DeleteTemplatesIfAny(Guid emailId, Guid[] languageIds, IList<string> handlerCodes) {
			IEmailTemplateDeleteStrategy strategy = new AggregatedTemplateDeleteStrategy(UserConnection, handlerCodes);
			if (languageIds.Any())
				strategy.Execute(emailId, languageIds);
		}

		private SaveEmailLanguageTemplateResponse PrepareSaveLanguageTemplatesDryRunResponse(
			SaveEmailLanguageTemplateRequest request) {
			var existingTemplates = BfEmailTemplateRepository.FetchAllByEmailId(request.EmailId);
			var templatesToDelete = existingTemplates.Where(x => !request.LanguageIds.Contains(x.LanguageId)).ToList();
			var languageIdsToCreate = request.LanguageIds
				.Where(x => existingTemplates.All(y => y.LanguageId != x)).ToArray();
			var templatesToCreate = BfTemplateLanguageService.FetchLanguageCodes(languageIdsToCreate).Select(x =>
				new EmailDesignerTemplateModel {
					LanguageId = x.Item1,
					LanguageCode = x.Item2
				}).ToList();
			return new SaveEmailLanguageTemplateResponse {
				TemplatesToDelete = templatesToDelete,
				TemplatesToCreate = templatesToCreate
			};
		}

		#endregion

		#region Methods: Public

        /// <summary>
        /// Gets all templates for the specified email.
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [OperationContract]
		[WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Bare,
			ResponseFormat = WebMessageFormat.Json)]
		public IEnumerable<EmailDesignerTemplateModel> GetAllTemplates(EmailDesignerTemplateRequest request) {
			return BfEmailTemplateRepository.FetchAllByEmailId(request.EmailId);
		}

        /// <summary>
        /// Gets or creates the default template for the specified email.
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [OperationContract]
		[WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Bare,
			ResponseFormat = WebMessageFormat.Json)]
		public EmailDesignerTemplateModel GetOrCreateDefaultTemplate(EmailDesignerTemplateRequest request) {
			Guid emailId = request.EmailId;
			BfTemplateLanguageService.UpdateLegacyTemplateIfNeeded(emailId);
			var resolvedTemplates = BfEmailTemplateRepository.FetchAllByEmailId(emailId);
			Guid defaultLanguageId = BfTemplateLanguageService.GetDefaultLanguageId();
			bool IsDefaultTemplate(EmailDesignerTemplateModel model) {
				return model.LanguageId == defaultLanguageId;
			}
			EmailDesignerTemplateModel defaultTemplate;
			if (!resolvedTemplates.Any())
				defaultTemplate =
					((BfEmailTemplateRepository)BfEmailTemplateRepository).CreateLegacy(emailId, defaultLanguageId);
			else if (!resolvedTemplates.Any(IsDefaultTemplate))
				defaultTemplate = resolvedTemplates.First();
			else
				defaultTemplate = resolvedTemplates.First(IsDefaultTemplate);
			return defaultTemplate;
		}

        /// <summary>
        /// Saves and removes the language templates for the specified email based on provided language IDs.
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [OperationContract]
		[WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Bare,
			ResponseFormat = WebMessageFormat.Json)]
		public SaveEmailLanguageTemplateResponse SaveLanguageTemplates(SaveEmailLanguageTemplateRequest request) {
			SaveEmailLanguageTemplateResponse response = PrepareSaveLanguageTemplatesDryRunResponse(request);
			if (request.DryRun)
				return response;
			try {
				response.TemplatesToCreate = CreateTemplatesIfAny(request.EmailId,
					response.TemplatesToCreate.Select(x => x.LanguageId).ToArray());
				DeleteTemplatesIfAny(request.EmailId,
					response.TemplatesToDelete.Select(x => x.LanguageId).ToArray(),
					request.HandlerCodes);
				return response;
			} catch (Exception exception) {
				Logger.Error($"Failed to save languages for Record: {request.EmailId}", exception);
				return new SaveEmailLanguageTemplateResponse {
					Success = false,
					ErrorInfo = new ErrorInfo {
						Message = $"Failed to save language templates: {exception.Message}"
					}
				};
			}
		}

		#endregion

	}

	#endregion

}
