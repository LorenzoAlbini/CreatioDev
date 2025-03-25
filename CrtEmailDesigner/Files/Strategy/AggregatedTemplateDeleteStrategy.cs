namespace CrtEmailDesigner.Strategy
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Common.Logging;
	using CrtEmailDesigner.Interfaces;
	using Terrasoft.Core;
	using Terrasoft.Core.Factories;

	#region Class: AggregatedTemplateDeleteStrategy

	/// <summary>
	/// Utility strategy to aggregate multiple others for deleting email templates in CrtEmailDesigner.
	/// </summary>
	internal class AggregatedTemplateDeleteStrategy : IEmailTemplateDeleteStrategy
	{

		#region Fields: Private

		private readonly ILog _log;
		private readonly IList<IEmailTemplateDeleteStrategy> _strategies = new List<IEmailTemplateDeleteStrategy>();

		#endregion

		#region Constructors: Public

		public AggregatedTemplateDeleteStrategy(UserConnection userConnection, IList<string> handlerCodes) {
			foreach (string handlerCode in handlerCodes.Distinct()) {
				var strategy = ClassFactory.Get<IEmailTemplateDeleteStrategy>(handlerCode,
					new ConstructorArgument("userConnection", userConnection));
				_strategies.Add(strategy);
			}
			_log = LogManager.GetLogger(nameof(AggregatedTemplateDeleteStrategy));
		}

		#endregion

		#region Methods: Public
		
		/// <inheritdoc cref="IEmailTemplateDeleteStrategy.Execute"/>
        public int Execute(Guid emailId, Guid[] languageIds) {
			var count = 0;
			foreach (IEmailTemplateDeleteStrategy strategy in _strategies)
				try {
					count += strategy.Execute(emailId, languageIds);
				} catch (Exception exception) {
					_log.Error($"Error executing strategy {strategy.GetType().Name}", exception);
				}
			return count;
		}

		#endregion

	}

	#endregion

}
