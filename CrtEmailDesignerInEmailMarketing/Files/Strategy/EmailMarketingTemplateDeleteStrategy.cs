namespace CrtEmailDesignerInEmailMarketing.Strategy
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using CrtEmailDesigner.Interfaces;
    using Terrasoft.Configuration.DynamicContent;
    using Terrasoft.Configuration.DynamicContent.Models;
    using Terrasoft.Core;
    using Terrasoft.Core.Factories;

    #region Class: EmailMarketingTemplateDeleteStrategy

    /// <summary>
    /// Bulk email template delete strategy.
    /// Extends the default email template delete strategy to delete dynamic content templates
    /// after deleting the email template.
    /// </summary>
    [DefaultBinding(typeof(IEmailTemplateDeleteStrategy), Name = "BulkEmail")]
    internal class EmailMarketingTemplateDeleteStrategy : IEmailTemplateDeleteStrategy
    {

        #region Fields: Private

        private readonly DCTemplateRepository<DCTemplateModel> _dcTemplateRepository;

        #endregion

        #region Constructors: Public

        public EmailMarketingTemplateDeleteStrategy(UserConnection userConnection) {
            _dcTemplateRepository = new DCTemplateRepository<DCTemplateModel>(userConnection);
        }

        #endregion

        #region Methods: Private

        private static DCRepositoryReadOptions<DCTemplateModel, DCReplicaModel> GetDcTemplateReadOptions() {
            return new DCRepositoryReadOptions<DCTemplateModel, DCReplicaModel> {
                TemplateReadOptions = DCTemplateReadOption.ExcludeReplicaHtmlContent
            };
        }

        private IList<DCTemplateModel> FetchDcTemplatesForRecordAndLanguages(Guid recordId, Guid[] languageIds) {
            IEnumerable<DCTemplateModel> dcTemplates =
                _dcTemplateRepository.GetDcTemplateModels(recordId, GetDcTemplateReadOptions());
            return dcTemplates.Where(x =>
                    x.LanguageId.HasValue && x.LanguageId != Guid.Empty && languageIds.Contains(x.LanguageId.Value))
                .ToList();
        }

        #endregion

        #region Methods: Public

        /// <inheritdoc cref="IEmailTemplateDeleteStrategy.Execute"/>
        public int Execute(Guid emailId, Guid[] languageIds) {
            Guid[] dcTemplateIdsToDelete = FetchDcTemplatesForRecordAndLanguages(emailId, languageIds)
                .Select(x => x.Id)
                .ToArray();
            foreach (Guid templateId in dcTemplateIdsToDelete)
                _dcTemplateRepository.Delete(templateId);
            return dcTemplateIdsToDelete.Length;
        }

        #endregion

    }

    #endregion

}
