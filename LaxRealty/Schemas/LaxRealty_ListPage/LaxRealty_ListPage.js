define("LaxRealty_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "LaxRealty"
						}
					}
				}
			},
			{
				"operation": "remove",
				"name": "SearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "SearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "SearchFilter_Items",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"Items"
										]
									}
								]
							}
						],
						"from": [
							"SearchFilter_SearchValue",
							"SearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "LaxRealty"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_LaxName",
							"caption": "#ResourceString(PDS_LaxName)#",
							"dataValueType": 1,
							"width": 178.98959350585938
						},
						{
							"id": "de680a81-a0dc-c307-0998-7cedfa17a0ec",
							"code": "PDS_LaxPrice",
							"caption": "#ResourceString(PDS_LaxPrice)#",
							"dataValueType": 32,
							"width": 187.00000762939453
						},
						{
							"id": "20d1c6e9-4ff5-56d5-78ae-e750492167b8",
							"code": "PDS_LaxType",
							"caption": "#ResourceString(PDS_LaxType)#",
							"dataValueType": 10
						},
						{
							"id": "5b58619d-a10c-080b-22ba-159555bb57cd",
							"code": "PDS_LaxOfferType",
							"caption": "#ResourceString(PDS_LaxOfferType)#",
							"dataValueType": 10
						},
						{
							"id": "6cec11d4-5eef-cb70-a494-93851a710b55",
							"code": "PDS_CreatedOn",
							"caption": "#ResourceString(PDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "a10e684d-d0c1-6ce5-f229-e6d0ec15f23d",
							"code": "PDS_LaxNumber",
							"caption": "#ResourceString(PDS_LaxNumber)#",
							"dataValueType": 27
						}
					]
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_LaxName": {
						"modelConfig": {
							"path": "PDS.LaxName"
						}
					},
					"PDS_LaxPrice": {
						"modelConfig": {
							"path": "PDS.LaxPrice"
						}
					},
					"PDS_LaxType": {
						"modelConfig": {
							"path": "PDS.LaxType"
						}
					},
					"PDS_LaxOfferType": {
						"modelConfig": {
							"path": "PDS.LaxOfferType"
						}
					},
					"PDS_CreatedOn": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
						}
					},
					"PDS_LaxNumber": {
						"modelConfig": {
							"path": "PDS.LaxNumber"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"loadOnChange": true,
							"name": "FolderTree_active_folder_filter"
						},
						{
							"name": "Items_PredefinedFilter",
							"loadOnChange": true
						},
						{
							"name": "LookupQuickFilterByTag_Items",
							"loadOnChange": true
						},
						{
							"name": "SearchFilter_Items",
							"loadOnChange": true
						}
					]
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "LaxRealty",
					"attributes": {
						"LaxName": {
							"path": "LaxName"
						},
						"LaxPrice": {
							"path": "LaxPrice"
						},
						"LaxType": {
							"path": "LaxType"
						},
						"LaxOfferType": {
							"path": "LaxOfferType"
						},
						"CreatedOn": {
							"path": "CreatedOn"
						},
						"LaxNumber": {
							"path": "LaxNumber"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});