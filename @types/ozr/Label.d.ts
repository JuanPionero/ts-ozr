interface Label extends ComponentSelectable,
    DataSetUsable, DataSetLinkable, 
    ComponentMeasurable,
    ComponentChildish,
    ComponentLeaf {
  ApplyFormat: { (): void };
  GetAlternativeText: { (): void };
  GetAutoFontSize: { (): void };
  GetBackgroundAlpha: { (): void };
  GetBackgroundColor: { (): void };

  GetBarcodeDataGap: { (): void };
  GetBarcodeDataPosition: { (): void };
  GetBarcodeErrorOption: { (): void };
  GetBarcodeHorizontalAlign: { (): void };
  GetBarcodeMargin: { (): void };
  GetBarcodePrintingScale: { (): void };
  GetBarcodeRatio: { (): void };
  GetBarcodeRotation: { (): void };
  GetBarcodeScale: { (): void };
  GetBarcodeStyle: { (): void };
  GetBarcodeTitle: { (): void };
  GetBarcodeTitleGap: { (): void };
  GetBarcodeTitlePosition: { (): void };
  GetBorderLocation: { (): void };
  GetBottomBorderColor: { (): void };
  GetBottomBorderDash: { (): void };
  GetBottomBorderDashOffset: { (): void };
  GetBottomBorderThickness: { (): void };
  GetBottomInternalMargin: { (): void };
  GetBottomLeftBorderRadius: { (): void };
  GetBottomRightBorderRadius: { (): void };
  GetCharacterSpacing: { (): void };
  GetComponentByName: { (): void };
  GetConditionFieldName: { (): void };
  GetCustomProperty: { (): void };
  GetDataMatrixBarcodeMargin: { (): void };
  GetDataMatrixEncoding: { (): void };
 
  
  GetDataType: { (): void };
  GetDistinctFieldName: { (): void };

  GetDrawingType: { (): void };
  GetEffect: { (): void };
  GetExportOption: { (): void };
  GetExpression: { (): void };
  GetFieldName: { (): void };
  GetFontName: { (): void };
  GetFontSize: { (): void };
  GetFontStretch: { (): void };
  GetFormat: { (): void };
  GetGradientColor: { (): void };
  GetGradientDirection: { (): void };
  GetGradientStartPosition: { (): void };
  GetGroupingRule: { (): void };
 
  GetHorizontalTextAlignment: { (): void };
  GetHorizontalWriteDirection: { (): void };
  GetImageAlign: { (): void };

  GetLeftBorderColor: { (): void };
  GetLeftBorderDash: { (): void };
  GetLeftBorderDashOffset: { (): void };
  GetLeftBorderThickness: { (): void };
  GetLeftInternalMargin: { (): void };
  GetLineSpacing: { (): void };

  GetNullType: { (): void };
  
  GetPage: { (): void };
  GetPageSeparator: { (): void };
  GetParameterName: { (): void };
  GetParameterSetName: { (): void };
 
  GetPDF417ColumnNumber: { (): void };
  GetPDF417ECC: { (): void };
  GetPDF417ImageAlign: { (): void };
  GetPDF417RowNumber: { (): void };
  GetPDF417XScale: { (): void };
  GetPDF417YScale: { (): void };
  GetPreferedHeight: { (): void };
  GetPreferedWidth: { (): void };
  GetPriorLabel: { (): void };
  GetQRBarcodeMargin: { (): void };
  GetQRECC: { (): void };
  GetQREncoding: { (): void };
  
  GetResourceName: { (): void };
  GetRightBorderColor: { (): void };
  GetRightBorderDash: { (): void };
  GetRightBorderDashOffset: { (): void };
  GetRightBorderThickness: { (): void };
  GetRightInternalMargin: { (): void };
  GetSummaryType: { (): void };
  GetSystemFieldName: { (): void };
  GetText: { (): void };
  GetTextColor: { (): void };
  GetTextDirection: { (): void };
  GetTextIndent: { (): void };
  GetTextLineColor: { (): void };
  GetTextRotation: { (): void };
  GetTocLevel: { (): void };
  GetTooltipText: { (): void };
  GetTop: { (): void };
  GetTopBorderColor: { (): void };
  GetTopBorderDash: { (): void };
  GetTopBorderDashOffset: { (): void };
  GetTopBorderThickness: { (): void };
  GetTopInternalMargin: { (): void };
  GetTopLeftBorderRadius: { (): void };
  GetTopRightBorderRadius: { (): void };
  GetUserClass: { (): void };
  GetUserValue: { (): void };
  GetVerticalTextAlignment: { (): void };
  GetVerticalWriteDirection: { (): void };
  GetWidth: { (): void };
  GetWordWrapType: { (): void };
  IsAutoSize: { (): void };
  IsChangeable: { (): void };
  IsClipping: { (): void };
  IsCRLFToLF: { (): void };
  IsDataMatrixGS1Compatible: { (): void };
  IsDataSetLastRow: { (): void };
  IsDataSetValueNull: { (): void };
  IsEditable: { (): void };
  IsEnableToShrink: { (): void };
  IsFixNewPage: { (): void };
  IsFontBold: { (): void };
  IsFontItalic: { (): void };
  IsFontStrikeOut: { (): void };
  IsFontUnderLine: { (): void };
  IsMovable: { (): void };
  IsPrintable: { (): void };
  IsShowBorder: { (): void };
  IsTransparent: { (): void };
  IsUseGradient: { (): void };
  IsUseThreadAtImage: { (): void };
  IsVisible: { (): void };
  IsWordWrap: { (): void };
  SetAlternativeText: { (): void };
  SetAutoFontSize: { (): void };
  SetAutoSize: { (): void };
  SetBackgroundAlpha: { (): void };
  SetBackgroundColor: { (): void };
  SetBarcodeDataGap: { (): void };
  SetBarcodeDataPosition: { (): void };
  SetBarcodeErrorOption: { (): void };
  SetBarcodeHorizontalAlign: { (): void };
  SetBarcodeMargin: { (): void };
  SetBarcodePrintingScale: { (): void };
  SetBarcodeRatio: { (): void };
  SetBarcodeRotation: { (): void };
  SetBarcodeScale: { (): void };
  SetBarcodeStyle: { (): void };
  SetBarcodeTitle: { (): void };
  SetBarcodeTitleGap: { (): void };
  SetBarcodeTitlePosition: { (): void };
  SetBorderLocation: { (): void };
  SetBottomBorderColor: { (): void };
  SetBottomBorderDash: { (): void };
  SetBottomBorderDashOffset: { (): void };
  SetBottomBorderThickness: { (): void };
  SetBottomInternalMargin: { (): void };
  SetBottomLeftBorderRadius: { (): void };
  SetBottomRightBorderRadius: { (): void };
  SetBrowserOption: { (): void };
  SetChangeable: { (): void };
  SetCharacterSpacing: { (): void };
  SetClipping: { (): void };
  SetConditionFieldName: { (): void };
  SetCRLFToLF: { (): void };
  SetCustomProperty: { (): void };
  SetDataMatrixBarcodeMargin: { (): void };
  SetDataMatrixEncoding: { (): void };
  SetDataMatrixGS1Compatible: { (): void };
  SetDataSetName: { (): void };
  SetDataType: { (): void };
  SetDistinctFieldName: { (): void };
  SetDrawingType: { (): void };
  SetEditable: { (): void };
  SetEffect: { (): void };
  SetEnableToShrink: { (): void };
  SetExportOption: { (): void };
  SetExpression: { (): void };
  SetFieldName: { (): void };
  SetFixNewPage: { (): void };
  SetFontBold: { (): void };
  SetFontItalic: { (): void };
  SetFontName: { (): void };
  SetFontSize: { (): void };
  SetFontStretch: { (): void };
  SetFontStrikeOut: { (): void };
  SetFontUnderLine: { (): void };
  SetFormat: { (): void };
  SetGradientColor: { (): void };
  SetGradientDirection: { (): void };
  SetGradientStartPosition: { (): void };
  SetGroupingRule: { (): void };
  SetHeight: { (): void };
  SetHorizontalTextAlignment: { (): void };
  SetHorizontalWriteDirection: { (): void };
  SetImageAlign: { (): void };
  SetLeft: { (): void };
  SetLeftBorderColor: { (): void };
  SetLeftBorderDash: { (): void };
  SetLeftBorderDashOffset: { (): void };
  SetLeftBorderThickness: { (): void };
  SetLeftInternalMargin: { (): void };
  SetLineSpacing: { (): void };
  SetLinkEvent: { (): void };
  SetLinkExecute: { (): void };
  SetLinkOption: { (): void };
  SetLinkParam: { (): void };
  SetLinkPostURL: { (): void };
  SetLinkRepository: { (): void };
  SetLinkServer: { (): void };
  SetLinkServlet: { (): void };
  SetLinkToc: { (): void };
  SetLinkURL: { (): void };
  SetMovable: { (): void };
  SetNullType: { (): void };
  SetODIName: { (): void };
  SetPageSeparator: { (): void };
  SetParameterName: { (): void };
  SetParameterSetName: { (): void };
  SetPDF417ColumnNumber: { (): void };
  SetPDF417ECC: { (): void };
  SetPDF417ImageAlign: { (): void };
  SetPDF417RowNumber: { (): void };
  SetPDF417XScale: { (): void };
  SetPDF417YScale: { (): void };
  SetPrintable: { (): void };
  SetPriorLabel: { (): void };
  SetQRBarcodeMargin: { (): void };
  SetQRECC: { (): void };
  SetQREncoding: { (): void };
  SetResourceName: { (): void };
  SetRightBorderColor: { (): void };
  SetRightBorderDash: { (): void };
  SetRightBorderDashOffset: { (): void };
  SetRightBorderThickness: { (): void };
  SetRightInternalMargin: { (): void };
  SetShowBorder: { (): void };
  SetSummaryType: { (): void };
  SetSystemFieldName: { (): void };
  SetText: { (): void };
  SetTextColor: { (): void };
  SetTextDirection: { (): void };
  SetTextIndent: { (): void };
  SetTextLineColor: { (): void };
  SetTextRotation: { (): void };
  SetTocLevel: { (): void };
  SetTooltipText: { (): void };
  SetTop: { (): void };
  SetTopBorderColor: { (): void };
  SetTopBorderDash: { (): void };
  SetTopBorderDashOffset: { (): void };
  SetTopBorderThickness: { (): void };
  SetTopInternalMargin: { (): void };
  SetTopLeftBorderRadius: { (): void };
  SetTopRightBorderRadius: { (): void };
  SetTransparent: { (): void };
  SetUseGradient: { (): void };
  SetUserClass: { (): void };
  SetUserValue: { (): void };
  SetUseThreadAtImage: { (): void };
  SetVerticalTextAlignment: { (): void };
  SetVerticalWriteDirection: { (): void };
  SetVisible: { (): void };
  SetWidth: { (): void };
  SetWordWrap: { (): void };
  SetWordWrapType: { (): void };
}