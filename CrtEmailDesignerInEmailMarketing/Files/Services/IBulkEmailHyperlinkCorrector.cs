namespace CrtEmailDesignerInEmailMarketing.Services
{
	using System.Collections.Generic;
	using Terrasoft.Configuration;

	/// <summary>
	/// Provides methods for managing and manipulating hyperlinks in HTML content.
	/// </summary>
	internal interface IBulkEmailHyperlinkCorrector
	{

		#region Methods: Public

		/// <summary>
		/// Adds a unique replica parameter to each hyperlink in the HTML content.
		/// </summary>
		/// <param name="htmlContent">The HTML content containing the links.</param>
		/// <param name="replicaIndex">The replica index to add to the links.</param>
		/// <returns>The HTML content with updated links.</returns>
		string ApplyBpmParametersToHyperlinks(string htmlContent, int replicaIndex);

		/// <summary>
		/// Extracts all unique hyperlinks from the HTML content.
		/// </summary>
		/// <param name="htmlContent">The HTML content containing the links.</param>
		/// <returns>A list of unique hyperlinks.</returns>
		HyperlinkData[] ExtractHyperlinks(string htmlContent);

		/// <summary>
		/// Removes duplicate hyperlinks from the list.
		/// </summary>
		/// <param name="allLinks">The list of hyperlinks.</param>
		/// <returns>A list of distinct hyperlinks.</returns>
		List<HyperlinkData> GetDistinctHyperlinks(List<HyperlinkData> allLinks);

		#endregion

	}
}