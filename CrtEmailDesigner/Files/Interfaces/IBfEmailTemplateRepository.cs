namespace CrtEmailDesigner.Interfaces
{
	using System;
	using System.Collections.Generic;
	using CrtContentDesigner.Repositories;
	using CrtEmailDesigner.Contracts;

	/// <summary>
	/// Template repository for email templates.
	/// </summary>
#pragma warning disable CS0618 // Type or member is obsolete
	internal interface IBfEmailTemplateRepository : ITemplateRepository
#pragma warning restore CS0618 // Type or member is obsolete
	{

		#region Methods: Public

		/// <summary>
		/// Creates an empty template for the specified email and language.
		/// </summary>
		/// <param name="emailId"></param>
		/// <param name="languageId"></param>
		EmailDesignerTemplateModel Create(Guid emailId, Guid languageId);

		/// <summary>
		/// Creates templates for the specified email and languages.
		/// </summary>
		/// <param name="emailId"></param>
		/// <param name="languageIds"></param>
		/// <returns></returns>
		IList<EmailDesignerTemplateModel> CreateMany(Guid emailId, IEnumerable<Guid> languageIds);

		/// <summary>
		/// Deletes the specified templates by IDs.
		/// </summary>
		/// <param name="templateIds"></param>
		/// <returns></returns>
		IList<EmailDesignerTemplateModel> DeleteMany(Guid[] templateIds);

		/// <summary>
		/// Retrieves the existing templates for the specified email.
		/// </summary>
		/// <param name="emailId"></param>
		/// <returns></returns>
		IList<EmailDesignerTemplateModel> FetchAllByEmailId(Guid emailId);

		/// <summary>
		/// Retrieves the existing templates for the specified id.
		/// </summary>
		/// <param name="templateId"></param>
		/// <returns></returns>
		EmailDesignerTemplateModel FetchById(Guid templateId);

		/// <summary>
		/// Retrieves the existing templates for the specified ids.
		/// </summary>
		/// <param name="templateIds"></param>
		/// <returns></returns>
		IList<EmailDesignerTemplateModel> FetchByIds(IEnumerable<Guid> templateIds);

		#endregion

	}
}
