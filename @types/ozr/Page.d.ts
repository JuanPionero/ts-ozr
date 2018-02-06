interface Page {
  GetComponentByName: { (ComponentName: string): object };
  GetHorizontalPageCount: { (): number };
  GetHorizontalPageIndex: { (): number };
  GetPageCount: { (): number };
  GetPageIndex: { (): number };
  GetPageIndexInReportTemplate: { (): number };
  GetVerticalPageCount: { (): number };
  GetVerticalPageIndex: { (): number };

  SetExcelModifyPassword: {
    (ExcelModifyPassword: string, UserName?: string): void;
  };

  SetExcelOpenPassword: { (ExcelOpenPassword: string): void };

  SetExcelSheetName: {
    (
      ExcelSheetName: string,
      ExcelPrintTitleRows?: string,
      ExcelPrintTitleColumns?: string,
      ExcelPageOrder?: string
    ): void;
  };

  SetExportFileName: {
    (
      ExportFileFormat: string,
      Prefix: string,
      Postfix: string,
      SubFolderPath?: string
    ): void;
  };

  setExportParameter: {
    (ViewerParameterName: string, ViewerParameterValue: string): void;
  };

  SetPageThumbnailMarker: { (PageThumbnailMarker: boolean): void };
}

declare namespace Page {
  function GetComponentByName(ComponentName: string): object;
  function GetHorizontalPageCount(): number;
  function GetHorizontalPageIndex(): number;
  function GetPageCount(): number;
  function GetPageIndex(): number;
  function GetPageIndexInReportTemplate(): number;
  function GetVerticalPageCount(): number;
  function GetVerticalPageIndex(): number;

  function SetExcelModifyPassword(ExcelModifyPassword: string): void;
  function SetExcelModifyPassword(
    ExcelModifyPassword: string,
    userName: string
  ): void;
  function SetExcelOpenPassword(ExcelOpenPassword: string): void;
  function SetExcelSheetName(ExcelSheetName: string): void;
  function SetExcelSheetName(
    ExcelSheetName: string,
    ExcelPrintTitleRows: string
  ): void;
  function SetExcelSheetName(
    ExcelSheetName: string,
    ExcelPrintTitleRows: string,
    ExcelPrintTitleColumns: string
  ): void;
  function SetExcelSheetName(
    ExcelSheetName: string,
    ExcelPrintTitleRows: string,
    ExcelPrintTitleColumns: string,
    ExcelPageOrder: string
  ): void;

  function SetExportFileName(
    ExportFileFormat: string,
    Prefix: string,
    Postfix: string
  ): void;
  function SetExportFileName(
    ExportFileFormat: string,
    Prefix: string,
    Postfix: string,
    SubFolderPath: string
  ): void;

  function setExportParameter(
    ViewerParameterName: string,
    ViewerParameterValue: string
  ): void;

  function SetPageThumbnailMarker(PageThumbnailMarker: boolean): void;
}
