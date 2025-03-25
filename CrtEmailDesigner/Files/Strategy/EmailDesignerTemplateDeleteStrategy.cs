namespace CrtEmailDesigner.Strategy
{
	using System;
	using System.Linq;
	using CrtEmailDesigner.Interfaces;
	using Terrasoft.Core;
	using Terrasoft.Core.Factories;

	#region Class: EmailDesignerTemplateDeleteStrategy

	/// <summary>
	/// Default strategy to delete email templates in CrtEmailDesigner.
	/// </summary>
	[DefaultBinding(typeof(IEmailTemplateDeleteStrategy), Name = "Email")]
	internal class EmailDesignerTemplateDeleteStrategy : IEmailTemplateDeleteStrategy
	{

		#region Fields: Private

		private readonly IBfEmailTemplateRepository _bfTemplateRepository;

		#endregion

		#region Constructors: Public

		public EmailDesignerTemplateDeleteStrategy(UserConnection userConnection) {
			_bfTemplateRepository =
				ClassFactory.Get<IBfEmailTemplateRepository>(new ConstructorArgument("userConnection", userConnection));
		}

		#endregion

		#region Methods: Public

		/// <inheritdoc cref="IEmailTemplateDeleteStrategy.Execute"/>
		public int Execute(Guid emailId, Guid[] languageIds) {
			var templateIds = _bfTemplateRepository.FetchAllByEmailId(emailId)
				.Where(x => languageIds.Contains(x.LanguageId)).Select(x => Guid.Parse(x.Id)).ToArray();
			if (!templateIds.Any())
				return 0;
			return _bfTemplateRepository.DeleteMany(templateIds).Count;
		}

		#endregion

	}

	#endregion

}
