namespace CrtEmailDesigner.Utilities
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using CrtEmailDesigner.Interfaces;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;

	#region Class: BfTemplateLanguageService

    /// <summary>
    /// Default implementation of <see cref="IBfTemplateLanguageService"/>.
    /// </summary>
    [DefaultBinding(typeof(IBfTemplateLanguageService), Name = "Email")]
	internal class BfTemplateLanguageService : IBfTemplateLanguageService
	{

		#region Constants: Private

		private const string SysLanguageSchemaName = "SysLanguage";
		private const string TemplateSchemaName = "BfEmailTemplate";

		#endregion

		#region Fields: Private

		private readonly UserConnection _userConnection;

		#endregion

		#region Constructors: Public

		/// <summary>Initializes a new instance of the <see cref="T:System.Object"/> class.</summary>
		public BfTemplateLanguageService(UserConnection userConnection) {
			_userConnection = userConnection;
		}

		#endregion

		#region Methods: Public

		/// <inheritdoc/>
		public IList<(Guid, string)> FetchLanguageCodes(Guid[] languageIds) {
			var result = new List<(Guid, string)>();
			if (languageIds.Length == 0)
				return result;
			var query = new EntitySchemaQuery(_userConnection.EntitySchemaManager, SysLanguageSchemaName) {
				PrimaryQueryColumn = {
					IsAlwaysSelect = true
				}
			};
			query.AddColumn("Code");
			var filter = new EntitySchemaQueryFilterCollection(query, LogicalOperationStrict.Or);
			foreach (Guid id in languageIds)
				filter.Add(query.CreateFilterWithParameters(FilterComparisonType.Equal, "Id", id));
			query.Filters.Add(filter);
			EntityCollection entities = query.GetEntityCollection(_userConnection);
			result.AddRange(entities.Select(entity =>
				(entity.GetTypedColumnValue<Guid>("Id"), entity.GetTypedColumnValue<string>("Code"))));
			return result;
		}

		/// <inheritdoc/>
		public Guid GetDefaultLanguageId() {
			return SysSettings.GetValue(_userConnection, "BulkEmailDefaultLanguage", Guid.Empty);
		}

		/// <inheritdoc/>
		public void UpdateLegacyTemplateIfNeeded(Guid emailId) {
			Entity legacyEntity = _userConnection.EntitySchemaManager.GetInstanceByName(TemplateSchemaName)
				.CreateEntity(_userConnection);
			if (legacyEntity.FetchFromDB(emailId)) {
				if (legacyEntity.GetTypedColumnValue<Guid>("EmailId") == Guid.Empty)
					legacyEntity.SetColumnValue("EmailId", emailId);
				if (legacyEntity.GetTypedColumnValue<Guid>("TemplateLanguageId") == Guid.Empty)
					legacyEntity.SetColumnValue("TemplateLanguageId", GetDefaultLanguageId());
				legacyEntity.Save();
			}
		}

		#endregion

	}

	#endregion

}
