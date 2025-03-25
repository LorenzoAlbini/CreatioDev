namespace CrtEmailDesigner.Interfaces
{
	using System;
	using System.Collections.Generic;
	
	/// <summary>
	/// Utility service for working with multilingual email templates.
	/// </summary>
    internal interface IBfTemplateLanguageService
	{
		/// <summary>
		/// Gets the default language ID based on system setting in CrtEmailDesigner.
		/// </summary>
		/// <returns></returns>
        Guid GetDefaultLanguageId();
		
		/// <summary>
		/// Updates the legacy template if needed.
		/// </summary>
		/// <param name="emailId"></param>
        void UpdateLegacyTemplateIfNeeded(Guid emailId);
		
		/// <summary>
		/// Helper method to fetch language codes for the specified language IDs.
		/// </summary>
		/// <param name="languageIds"></param>
		/// <returns></returns>
        IList<(Guid, string)> FetchLanguageCodes(Guid[] languageIds);
	}
}
