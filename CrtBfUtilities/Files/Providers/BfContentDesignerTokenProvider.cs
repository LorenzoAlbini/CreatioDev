namespace Creatio.ContentDesigner
{
	using System;
	using System.Collections.Generic;
	using System.Net;
	using System.Net.Http;
	using System.Net.Http.Headers;
	using System.Threading.Tasks;
	using Common.Logging;
	using Newtonsoft.Json;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Factories;
	using Terrasoft.OAuthIntegration;
	using SystemSettings = Terrasoft.Core.Configuration.SysSettings;

	/// <summary>
	/// Provides logic to work with BF tokens
	/// </summary>
	[DefaultBinding(typeof(IContentDesignerTokenProvider))]
	internal class BfContentDesignerTokenProvider : IContentDesignerTokenProvider
	{

		#region Constants: Private

		private const string BfTokenProviderRequestExceptionTemplate = "BfTokenProvider. Send request failed. " +
			"RequestUri: {0}, ResponseStatusCode: {1}, " + "ResponseContent: {2}, Exception: {3}";

		private const string ContentDesignerUIdSysSettingCode = "ContentDesignerUId";
		private const string DefaultInstanceName = "Production";
		private const string EmailBuilderInstanceSysSettingCode = "EmailBuilderInstance";
		private const string GetBeefreeToken = "api/beefreetoken/access/";
		private const string LandingPageBuilderInstanceSysSettingCode = "LandingPageBuilderInstance";
		private const string Scope = "beefree_api";
		private const string SocialAccountUrlSysSettingCode = "SocialAccountServiceUrl";

		#endregion

		#region Fields: Private

		private readonly Dictionary<string, string> _contentBuilderToInstanceNameMapping =
			new Dictionary<string, string> {
				{ "email_builder", EmailBuilderInstanceSysSettingCode },
				{ "page_builder", LandingPageBuilderInstanceSysSettingCode }
			};

		private HttpClient _httpClient;
		private ILog _logger;

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Creates instance of <see cref="BfContentDesignerTokenProvider"/>
		/// </summary>
		/// <param name="userConnection">User connection instance</param>
		public BfContentDesignerTokenProvider(UserConnection userConnection) {
			var socialAccountServiceUrl = SystemSettings.GetValue(userConnection, SocialAccountUrlSysSettingCode);
			var baseAddress = new Uri(socialAccountServiceUrl.ToString());
			HttpClient = new HttpClient {
				BaseAddress = baseAddress
			};
		}

		#endregion

		#region Properties: Public

		public HttpClient HttpClient {
			get => _httpClient ?? (_httpClient = new HttpClient());
			set => _httpClient = value;
		}

		public ILog Logger {
			get => _logger ?? (_logger = LogManager.GetLogger(nameof(BfContentDesignerTokenProvider)));
			set => _logger = value;
		}

		#endregion

		#region Methods: Private

		private static string GetAccessToken() {
			var identityServiceWrapper = GlobalAppSettings.FeatureUseSeparateSettingsForOAuth20
				? ClassFactory.Get<IIdentityServiceWrapper>("ExternalAccess")
				: ClassFactory.Get<IIdentityServiceWrapper>();
			var token = identityServiceWrapper.GetAccessToken(Scope);
			return token;
		}

		private static HttpRequestMessage GetHttpRequestMessage(GetBfTokenRequest request, string requestUrl) {
			var token = GetAccessToken();
			var httpRequestMessage = new HttpRequestMessage(HttpMethod.Post, requestUrl);
			httpRequestMessage.Content = new StringContent(JsonConvert.SerializeObject(request));
			httpRequestMessage.Content.Headers.ContentType = new MediaTypeHeaderValue("application/json");
			httpRequestMessage.Headers.Authorization = new AuthenticationHeaderValue("Bearer", token);
			return httpRequestMessage;
		}

		private string GetContentBuilderInstance(string designerCode) {
			if (_contentBuilderToInstanceNameMapping.TryGetValue(designerCode, out var sysSettingCode)) {
				var instanceName = SystemSettings.GetValue(UserConnection.Current, sysSettingCode, string.Empty);
				return !string.IsNullOrEmpty(instanceName) ? instanceName : DefaultInstanceName;
			}
			throw new ArgumentException($"Invalid designer code: {designerCode}", nameof(designerCode));
		}

		private string GetUid() {
			var uid = SystemSettings.GetValue(UserConnection.Current, ContentDesignerUIdSysSettingCode, string.Empty);
			var emailDesignerUId = SystemSettings.GetValue(UserConnection.Current, "EmailDesignerUId", string.Empty);
			if (emailDesignerUId.IsNotNullOrWhiteSpace() && uid.IsNullOrEmpty()) {
				uid = emailDesignerUId;
				SystemSettings.SetValue(UserConnection.Current, ContentDesignerUIdSysSettingCode, uid);
			}
			if (!string.IsNullOrWhiteSpace(uid)) {
				return uid;
			}
			var newUid = Guid.NewGuid().ToString();
			SystemSettings.SetValue(UserConnection.Current, ContentDesignerUIdSysSettingCode, newUid);
			return newUid;
		}

		private void LogError(string messageTemplate, HttpRequestMessage httpRequestMessage, string errorString,
			HttpStatusCode httpStatusCode = HttpStatusCode.BadRequest, Exception exception = default) {
			Logger.Error(string.Format(messageTemplate, httpRequestMessage.RequestUri, httpStatusCode, errorString,
				exception));
		}

		private async Task<GetDesignerTokenResponse> SendRequest(HttpRequestMessage httpRequestMessage) {
			HttpResponseMessage response = null;
			try {
				response = await HttpClient.SendAsync(httpRequestMessage);
				if (!response.IsSuccessStatusCode) {
					var errorContentString = response?.Content.ReadAsStringAsync().Result;
					LogError(BfTokenProviderRequestExceptionTemplate, httpRequestMessage, errorContentString,
						response.StatusCode);
					return new GetDesignerTokenResponse {
						Error = errorContentString
					};
				}
				var content = await response.Content.ReadAsStringAsync();
				var bfTokenResponse = JsonConvert.DeserializeObject<GetDesignerTokenResponse>(content);
				bfTokenResponse.IsSuccess = true;
				return bfTokenResponse;
			} catch (Exception e) {
				LogError(BfTokenProviderRequestExceptionTemplate, httpRequestMessage, e.Message, exception: e);
				return new GetDesignerTokenResponse {
					Error = e.Message
				};
			}
		}

		#endregion

		#region Methods: Public

		/// <inheritdoc cref="IContentDesignerTokenProvider.GetToken"/>
		public async Task<GetDesignerTokenResponse> GetToken(string designerCode, string appVersion) {
			var request = new GetBfTokenRequest {
				UId = GetUid(),
				InstanceName = GetContentBuilderInstance(designerCode),
				AppVersion = appVersion
			};
			var requestMessage = GetHttpRequestMessage(request, $"{GetBeefreeToken}{designerCode}");
			var content = await SendRequest(requestMessage);
			return content;
		}

		#endregion

	}
}
