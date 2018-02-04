declare namespace Global {
  function _ConvertCentimeterToPoint(Value:number): number;
  function _ConvertInchToPoint(Value:number): number;
  function _ConvertPointToCentimeter(Value:number): number;
  function _ConvertPointToInch(Value:number): number;
  function _Format(Value:string, Format:string): void;
  function _FormatDate( DateInNumber: number,DateFormat:string): void;
  function _GetSystemCountry(): string;
  function _GetSystemLanguage(): string;
  function _GetUSLServerParam(ParameterName:string): string;
  function _GetVersionNumber(): string;
  function _GetViewerCountry(): string;
  function _GetViewerLanguage(): string;
  function _GetWebBrowser(): object;

  function _MessageBox( Contents: string ): void;
  function _MessageBox( Contents: string, Title: string, CallBackFunction: {():void} ): void;

  function _ParseDate(Text:string, DateFormat:string): void;
  function _Trace(Text: string): void;
  function _TraceLn(Text: string): void;
  function _URLEncode(Text: string): string;
  function _URLEncode(Text: string, URLEncodingType :string): string;
}
