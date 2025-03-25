namespace CrtEmailDesigner.Interfaces
{
	using System;
	
	/// <summary>
	/// Represents a strategy for deleting email templates in CrtEmailDesigner.
	/// </summary>
    internal interface IEmailTemplateDeleteStrategy
	{
		/// <summary>
		/// Executes the strategy to delete email templates.
		/// </summary>
		/// <param name="emailId"></param>
		/// <param name="languageIds"></param>
		/// <returns></returns>
        int Execute(Guid emailId, Guid[] languageIds);
	}
}
