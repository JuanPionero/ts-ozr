interface ReportTemplate extends DataSetAppliable, DataSetOrderList {
  SetGlobal: { (key: string, value: GlobalAssignable): void };
  GetGlobal: { (key: string): GlobalAssignable };

  /**
   * 리포트 타입이 다중인 경우에만 동작합니다.
   */
  GetBindingOrderList: { (): void };
  /**
   * GetCurrentPage() 함수는 리포트 템플릿의 스크립트 편집 창에서 스크립트를 입력하는 것이 아니라
   * OnAddToPage,  OnEndBind 이벤트를 지원하는 다른 컴포넌트에서 보고서가 미리보기되어
   * 컴포넌트가 바인딩될 때 화면에 표시된 Page 객체를 가져오는 용도로 사용합니다.
   */
  GetCurrentPage: { (): object };

  
  GetDataSetSorting: { (FieldPath: string): string };

  GetDisplayName: { (): string };

  GetMeasureUnit: { (): string };
  GetOZResourceCountry: { (): string };
  GetOZResourceLanguage: { (): string };
  GetPageByIndex: { (PageIndex: number): object };
  GetPageCount: { (): number };
  GetReportType: { (): string };
  GetTitle: { (): string };
  GetUserValue: { (): Scalar };
  IsAntialiasing: { (): boolean };


  SetAntialiasing: { (Antialiasing: boolean): void };
  SetDataSetSorting: {
    (DataSetPath: string, SortInformation: string): void;
  };
  SetDisplayName: { (DisplayName: string): void };

  SetReportOption: {
    (ViewerParameterName: string, ViewerParameterValue: string): void;
  };
  SetTitle: { (Title: string): void };
  SetUserValue: { (UserValue: Scalar): void };
  TriggerLinkCommand: {
    (ComponentName: string, UserTag: string, UserValue: string): void;
  };
}

declare namespace ReportTemplate {
  /**
   * 문자와 숫자는 이벤트 제약없이 사용할 수 있습니다.
   * 배열은 같은 이벤트 그룹에서만 사용할 수 있습니다.
   * 이벤트 그룹은 스크립트 편집 창에서 이벤트 콤보 박스를 클릭하여 확인할 수 있습니다.
   * 예를 들면,
   * Behavior 그룹인 OnInitialize에서 선언한 배열 형태의 전역 변수는
   * OnPreDraw/OnPostDraw에서는 사용할 수 있으나,
   * Bind 그룹인 OnStartBind/OnBind에서는 사용할 수 없습니다.
   *
   * 위 내용에 근거하여 array는 serialise 로 사용.
   *
   * @param key
   * @param value
   */
  function SetGlobal(key: string, value: GlobalAssignable): void;
  function GetGlobal(key: string): GlobalAssignable;

  /**
   * 리포트 타입이 다중인 경우에만 동작합니다.
   */
  function GetBindingOrderList(): void;
  /**
   * GetCurrentPage() 함수는 리포트 템플릿의 스크립트 편집 창에서 스크립트를 입력하는 것이 아니라
   * OnAddToPage,  OnEndBind 이벤트를 지원하는 다른 컴포넌트에서 보고서가 미리보기되어
   * 컴포넌트가 바인딩될 때 화면에 표시된 Page 객체를 가져오는 용도로 사용합니다.
   */
  function GetCurrentPage(): object;

  function GetDataSetAVG(FieldPath: string): number;
  function GetDataSetAVG(FieldPath: string, DistinctFieldName: string): number;
  function GetDataSetAVG(
    FieldPath: string,
    DistinctFieldName: string,
    ConditionFieldName: string
  ): number;

  function GetDataSetCNT(FieldPath: string): number;
  function GetDataSetCNT(FieldPath: string, DistinctFieldName: string): number;
  function GetDataSetCNT(
    FieldPath: string,
    DistinctFieldName: string,
    ConditionFieldName: string
  ): number;

  function GetDataSetFREQ(FieldPath: string): number;
  function GetDataSetFREQ(FieldPath: string, DistinctFieldName: string): number;
  function GetDataSetFREQ(
    FieldPath: string,
    DistinctFieldName: string,
    ConditionFieldName: string
  ): number;

  function GetDataSetMAX(FieldPath: string): number;
  function GetDataSetMAX(FieldPath: string, DistinctFieldName: string): number;
  function GetDataSetMAX(
    FieldPath: string,
    DistinctFieldName: string,
    ConditionFieldName: string
  ): number;

  function GetDataSetMIN(FieldPath: string): number;
  function GetDataSetMIN(FieldPath: string, DistinctFieldName: string): number;
  function GetDataSetMIN(
    FieldPath: string,
    DistinctFieldName: string,
    ConditionFieldName: string
  ): number;

  function GetDataSetRowCount(FieldPath: string): number;
  function GetDataSetRowIndex(FieldPath: string): number;
  function GetDataSetSorting(FieldPath: string): string;

  function GetDataSetSUM(FieldPath: string): number;
  function GetDataSetSUM(FieldPath: string, DistinctFieldName: string): number;
  function GetDataSetSUM(
    FieldPath: string,
    DistinctFieldName: string,
    ConditionFieldName: string
  ): number;

  function GetDataSetValue(FieldPath: string): Scalar;
  function GetDataSetValue(FieldPath: string, RowIndex: number): Scalar;
  function GetDisplayName(): string;

  function GetMeasureUnit(): string;
  function GetOZResourceCountry(): string;
  function GetOZResourceLanguage(): string;
  function GetPageByIndex(PageIndex: number): object;
  function GetPageCount(): number;
  function GetReportType(): string;
  function GetTitle(): string;
  function GetUserValue(): Scalar;
  function IsAntialiasing(): boolean;
  function IsDataSetLastRow(): boolean;
  function IsDataSetValueNull(): boolean;

  function SetAntialiasing(Antialiasing: boolean): void;
  function SetBindingOrderList(BindingOrderList: string): void;
  function SetDataSetSorting(
    DataSetPath: string,
    SortInformation: string
  ): void;
  function SetDisplayName(DisplayName: string): void;

  function SetReportOption(
    ViewerParameterName: string,
    ViewerParameterValue: string
  ): void;
  function SetTitle(Title: string): void;
  function SetUserValue(UserValue: Scalar): void;
  function TriggerLinkCommand(
    ComponentName: string,
    UserTag: string,
    UserValue: string
  ): void;
}
