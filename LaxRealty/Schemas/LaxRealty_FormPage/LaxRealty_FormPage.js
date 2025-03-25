define("LaxRealty_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "LaxRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "6726ba70-527d-4481-abe5-0f29d62bcc97",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PushMeButton_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "database-icon",
					"clicked": {
						"request": "lax.PushButtonRequest"
					},
					"clickMode": "default"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LaxName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.LaxName",
					"control": "$LaxName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_LaxPrice_t35zdwm",
					"labelPosition": "auto",
					"control": "$PDS_LaxPrice_t35zdwm"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Area",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_LaxArea_phzt5yx",
					"labelPosition": "auto",
					"control": "$PDS_LaxArea_phzt5yx"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Commission",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_LaxCommision_c7plz93",
					"labelPosition": "auto",
					"control": "$PDS_LaxCommision_c7plz93",
					"readonly": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Number",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_LaxNumber_bap6j1u",
					"labelPosition": "auto",
					"control": "$PDS_LaxNumber_bap6j1u",
					"multiline": false,
					"readonly": true,
					"visible": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Type",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_LaxType_3s6opgl",
					"labelPosition": "auto",
					"control": "$PDS_LaxType_3s6opgl",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_LaxOfferType_wjkz2cc",
					"labelPosition": "auto",
					"control": "$PDS_LaxOfferType_wjkz2cc",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_LaxComment_is0fihx",
					"labelPosition": "auto",
					"control": "$PDS_LaxComment_is0fihx",
					"multiline": false,
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Percent",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_LaxOfferTypeLaxCommissionPercent_v9wlzj4",
					"control": "$PDS_LaxOfferTypeLaxCommissionPercent_v9wlzj4",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Country",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_LaxCountry_fd5r65n",
					"labelPosition": "auto",
					"control": "$PDS_LaxCountry_fd5r65n",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_LaxManager_puscwhn",
					"labelPosition": "auto",
					"control": "$PDS_LaxManager_puscwhn",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "City",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_LaxCity_9ki2gqz",
					"labelPosition": "auto",
					"control": "$PDS_LaxCity_9ki2gqz",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_3yr1k7z",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_3yr1k7z_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_39jua2f",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_3yr1k7z",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_nk8scmg",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_39jua2f",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_66moa04",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_66moa04_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "LaxRealtyVisit",
							"defaultValues": [
								{
									"attributeName": "LaxParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_nk8scmg",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_dv5t876",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_dv5t876_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_l0n4204DS"
						}
					}
				},
				"parentName": "FlexContainer_nk8scmg",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_imbm5cw",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_imbm5cw_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_nk8scmg",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_vpg49bx",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_vpg49bx_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RealtyVisitsGridDetail"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_imbm5cw",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_0jck4oe",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_0jck4oe_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "LaxRealtyVisit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_imbm5cw",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_dc5xjry",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_dc5xjry_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_dc5xjry_GridDetail_l0n4204",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_l0n4204"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_dc5xjry_SearchValue",
							"GridDetailSearchFilter_dc5xjry_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_nk8scmg",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_9envd5l",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_3yr1k7z",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RealtyVisitsGridDetail",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_l0n4204",
					"activeRow": "$GridDetail_l0n4204_ActiveRow",
					"selectionState": "$GridDetail_l0n4204_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_l0n4204_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_l0n4204DS_Id",
					"columns": [
						{
							"id": "f5196d2c-76e1-48b5-e41e-bd9b349e7c49",
							"code": "GridDetail_l0n4204DS_LaxVisitDateTime",
							"caption": "#ResourceString(GridDetail_l0n4204DS_LaxVisitDateTime)#",
							"dataValueType": 7
						},
						{
							"id": "c5748bb0-9c93-05fa-778d-7f2966026978",
							"code": "GridDetail_l0n4204DS_LaxPotentialCustomer",
							"caption": "#ResourceString(GridDetail_l0n4204DS_LaxPotentialCustomer)#",
							"dataValueType": 10
						},
						{
							"id": "69650eda-29ca-7043-625c-e4b1863e8d86",
							"code": "GridDetail_l0n4204DS_CreatedOn",
							"caption": "#ResourceString(GridDetail_l0n4204DS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "d84fb313-40b7-96d7-f122-d9f3ff569f9e",
							"code": "GridDetail_l0n4204DS_LaxComment",
							"caption": "#ResourceString(GridDetail_l0n4204DS_LaxComment)#",
							"dataValueType": 28
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_9envd5l",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_l0n4204_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_l0n4204DS",
							"filters": "$GridDetail_l0n4204 | crt.ToCollectionFilters : 'GridDetail_l0n4204' : $GridDetail_l0n4204_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_l0n4204_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "RealtyVisitsGridDetail",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_l0n4204_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_l0n4204DS",
							"filters": "$GridDetail_l0n4204 | crt.ToCollectionFilters : 'GridDetail_l0n4204' : $GridDetail_l0n4204_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_l0n4204_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_l0n4204_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_l0n4204_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RealtyVisitsGridDetail",
							"filters": "$GridDetail_l0n4204 | crt.ToCollectionFilters : 'GridDetail_l0n4204' : $GridDetail_l0n4204_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_l0n4204_SelectionState"
						}
					}
				},
				"parentName": "RealtyVisitsGridDetail",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_l0n4204_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_l0n4204DS",
							"filters": "$GridDetail_l0n4204 | crt.ToCollectionFilters : 'GridDetail_l0n4204' : $GridDetail_l0n4204_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_l0n4204_SelectionState"
						}
					}
				},
				"parentName": "RealtyVisitsGridDetail",
				"propertyName": "bulkActions",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"LaxName": {
						"modelConfig": {
							"path": "PDS.LaxName"
						}
					},
					"PDS_LaxPrice_t35zdwm": {
						"modelConfig": {
							"path": "PDS.LaxPrice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "lax.DGValidator",
								"params": {
									"minValue": 50,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_LaxArea_phzt5yx": {
						"modelConfig": {
							"path": "PDS.LaxArea"
						},
						"validators": {
							"MySuperValidator": {
								"type": "lax.DGValidator",
								"params": {
									"minValue": 100,
									"message": "#ResourceString(AreaCannotBeLess)#"
								}
							}
						}
					},
					"PDS_LaxType_3s6opgl": {
						"modelConfig": {
							"path": "PDS.LaxType"
						}
					},
					"PDS_LaxOfferType_wjkz2cc": {
						"modelConfig": {
							"path": "PDS.LaxOfferType"
						}
					},
					"PDS_LaxComment_is0fihx": {
						"modelConfig": {
							"path": "PDS.LaxComment"
						}
					},
					"PDS_LaxManager_puscwhn": {
						"modelConfig": {
							"path": "PDS.LaxManager"
						}
					},
					"PDS_LaxNumber_bap6j1u": {
						"modelConfig": {
							"path": "PDS.LaxNumber"
						}
					},
					"PDS_LaxCountry_fd5r65n": {
						"modelConfig": {
							"path": "PDS.LaxCountry"
						}
					},
					"PDS_LaxCity_9ki2gqz": {
						"modelConfig": {
							"path": "PDS.LaxCity"
						}
					},
					"PDS_LaxCommision_c7plz93": {
						"modelConfig": {
							"path": "PDS.LaxCommision"
						}
					},
					"PDS_LaxOfferTypeLaxCommissionPercent_v9wlzj4": {
						"modelConfig": {
							"path": "PDS.LaxOfferTypeLaxCommissionPercent_v9wlzj4"
						}
					},
					"GridDetail_l0n4204": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_l0n4204DS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_dc5xjry_GridDetail_l0n4204",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_l0n4204DS_LaxVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_l0n4204DS.LaxVisitDateTime"
									}
								},
								"GridDetail_l0n4204DS_LaxPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_l0n4204DS.LaxPotentialCustomer"
									}
								},
								"GridDetail_l0n4204DS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_l0n4204DS.CreatedOn"
									}
								},
								"GridDetail_l0n4204DS_LaxComment": {
									"modelConfig": {
										"path": "GridDetail_l0n4204DS.LaxComment"
									}
								},
								"GridDetail_l0n4204DS_Id": {
									"modelConfig": {
										"path": "GridDetail_l0n4204DS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_l0n4204DS": [
							{
								"attributePath": "LaxParentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "LaxRealty",
							"attributes": {
								"LaxOfferTypeLaxCommissionPercent_v9wlzj4": {
									"path": "LaxOfferType.LaxCommissionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_l0n4204DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "LaxRealtyVisit",
							"attributes": {
								"LaxVisitDateTime": {
									"path": "LaxVisitDateTime"
								},
								"LaxPotentialCustomer": {
									"path": "LaxPotentialCustomer"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"LaxComment": {
									"path": "LaxComment"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				/* ho messo lax al posto di usr */
				request: "lax.PushButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					console.log("Button works...");
					Terrasoft.showInformation("My button was pressed.");
					var price = await request.$context.PDS_LaxPrice_t35zdwm;
					console.log("Price = " + price);
					request.$context.PDS_LaxPrice_t35zdwm = price * 1.2;
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				/* The custom implementation of the system query handler. */
				handler: async (request, next) => {
      					if (request.attributeName === 'PDS_LaxPrice_t35zdwm' || 				             // if price changed
					   request.attributeName === 'PDS_LaxOfferTypeLaxCommissionPercent_v9wlzj4' ) { 		// or percent changed
						var price = await request.$context.PDS_LaxPrice_t35zdwm;
						var percent = await request.$context.PDS_LaxOfferTypeLaxCommissionPercent_v9wlzj4;
						var commission = price * percent / 100;
						request.$context.PDS_LaxCommision_c7plz93 = commission;
					}
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			/* The validator type must contain a vendor prefix.
			Format the validator type in PascalCase. */
			"lax.DGValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value >= minValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"lax.DGValidator": { 
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}
		}/**SCHEMA_VALIDATORS*/
	};
});