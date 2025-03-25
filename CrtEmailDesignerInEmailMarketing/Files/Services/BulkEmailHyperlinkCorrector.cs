namespace CrtEmailDesignerInEmailMarketing.Services
{
	using System.Collections.Generic;
	using System.Text.RegularExpressions;
	using Terrasoft.Configuration;

	/// <inheritdoc cref="IBulkEmailHyperlinkCorrector"/>
	internal class BulkEmailHyperlinkCorrector : IBulkEmailHyperlinkCorrector
	{

		#region Constants: Private

		private const string ReplicaParameterName = "bpmreplica";
		private const string TrackIdParameterName = "bpmtrackid";

		#endregion

		#region Fields: Private

		private readonly Regex _hrefUrlRegexp =
			new Regex(@"<(?![^>]*\bxmlns:v=[""']urn:schemas-microsoft-com:vml[""'])[^>]*\bhref\s*=\s*[""']((http|ftp|https):\/\/.*?)([""'])([\w[,@?^=%&:\/~+#-])?",
				RegexOptions.Compiled);
		private readonly Regex _urlRegexp =
			new Regex(@"(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@^=%~+#-])?",
				RegexOptions.Compiled);

		private readonly Regex _hrefContentRegexp = new Regex(@"([""'])(.*?)([""'])", RegexOptions.Compiled);

		private readonly Regex _fullUrlRegexp =
			new Regex(
				@"<a[^>]*?href\s*=\s*([""'])((http|ftp|https):\/\/.*?)([""'])[^>]*>([^<]*(?:(?!<\/a)<[^<]*)*)<\/a>",
				RegexOptions.Compiled);

		private readonly Regex _urlAnchorPartRegexp = new Regex(@"(?!.*(\[#|#\]))#.+", RegexOptions.Compiled);
		private readonly Regex _textContentRegex = new Regex(">([^<>]+)<", RegexOptions.Compiled);

		#endregion

		#region Methods: Private

		private string GetAnchorPartFromUrl(string url) {
			var result = _urlAnchorPartRegexp.Match(url);
			return result.Success ? result.Value : "";
		}

		private string GetHtmlInnerText(string html) {
			if (!html.Contains("<") || !html.Contains(">")) {
				return html.Trim();
			}
			var match = _textContentRegex.Match(html);
			return match.Success ? match.Groups[1].Value.Trim() : string.Empty;
		}

		private string InsertOrReplaceLinkParameter(string link, string parameterName, string parameterValue) {
			link = link.Replace("&amp;", "&");
			if (link.Contains(TrackIdParameterName)) {
				link = RemoveParamFromUrl(parameterName, link);
			}
			var delimiter = link.Contains("?") ? "&" : "?";
			var anchorPart = GetAnchorPartFromUrl(link);
			if (anchorPart != "") {
				link = link.Replace(anchorPart, "");
			}
			return link + delimiter + parameterName + "=" + parameterValue + anchorPart;
		}

		private string InsertParameterIntoLink(string link, string parameterName, string parameterValue) {
			var delimiter = link.Contains("?") ? "&" : "?";
			var anchorPart = GetAnchorPartFromUrl(link);
			if (anchorPart != "") {
				link = link.Replace(anchorPart, "");
			}
			return link + delimiter + parameterName + "=" + parameterValue + anchorPart;
		}

		private string RemoveParamFromUrl(string paramName, string url) {
			var anchorPart = GetAnchorPartFromUrl(url);
			if (anchorPart != "") {
				url = url.Replace(anchorPart, "");
			}
			var resultUrl = url.Split('?')[0];
			var queryString = url.Contains("?") ? url.Split('?')[1] : "";
			var paramsArr = new List<string>(queryString.Split('&'));
			paramsArr.RemoveAll(p => p.StartsWith(paramName + "="));
			if (paramsArr.Count > 0) {
				resultUrl += "?" + string.Join("&", paramsArr);
			}
			return resultUrl + anchorPart;
		}

		#endregion

		#region Methods: Public

		/// <inheritdoc cref="IBulkEmailHyperlinkCorrector.ApplyBpmParametersToHyperlinks"/>
		public string ApplyBpmParametersToHyperlinks(string htmlContent, int replicaIndex) {
			var bpmTrackId = 1;
			return _hrefUrlRegexp.Replace(htmlContent, href => {
				return _hrefContentRegexp.Replace(href.Value, match => {
					var url = match.Groups[2].Value;
					if (url.Contains(ReplicaParameterName) || !_urlRegexp.IsMatch(url)) {
						return match.Value;
					}
					var correctedUrl = InsertOrReplaceLinkParameter(url, TrackIdParameterName, bpmTrackId++.ToString());
					correctedUrl = InsertParameterIntoLink(correctedUrl, ReplicaParameterName, replicaIndex.ToString());
					return $"{match.Groups[1].Value}{correctedUrl}{match.Groups[3].Value}";
				});
			});
		}

		/// <inheritdoc cref="IBulkEmailHyperlinkCorrector.ExtractHyperlinks"/>
		public HyperlinkData[] ExtractHyperlinks(string htmlContent) {
			var allLinks = new List<HyperlinkData>();
			foreach (Match match in _fullUrlRegexp.Matches(htmlContent)) {
				var url = match.Groups[2].Value;
				var hyperlinkInnerHtml = match.Groups[5].Value;
				var caption = GetHtmlInnerText(hyperlinkInnerHtml);
				if (!string.IsNullOrEmpty(url)) {
					allLinks.Add(new HyperlinkData
						{ Url = url, Caption = !string.IsNullOrEmpty(caption) ? caption : url });
				}
			}
			return GetDistinctHyperlinks(allLinks).ToArray();
		}

		/// <inheritdoc cref="IBulkEmailHyperlinkCorrector.GetDistinctHyperlinks"/>
		public List<HyperlinkData> GetDistinctHyperlinks(List<HyperlinkData> allLinks) {
			var distinctLinks = new List<HyperlinkData>();
			var uniqueUrls = new HashSet<string>();
			foreach (var link in allLinks) {
				if (uniqueUrls.Add(link.Url)) {
					distinctLinks.Add(link);
				}
			}
			return distinctLinks;
		}

		#endregion

	}
}