interface DataSetAppliable {
  GetDataSetAVG: {
    (
      FieldPath: string,
      DistinctFieldName?: string,
      ConditionFieldName?: string
    ): number;
  };

  GetDataSetCNT: {
    (
      FieldPath: string,
      DistinctFieldName?: string,
      ConditionFieldName?: string
    ): number;
  };

  GetDataSetFREQ: {
    (
      FieldPath: string,
      DistinctFieldName?: string,
      ConditionFieldName?: string
    ): number;
  };

  GetDataSetMAX: {
    (
      FieldPath: string,
      DistinctFieldName?: string,
      ConditionFieldName?: string
    ): number;
  };
  GetDataSetMIN: {
    (
      FieldPath: string,
      DistinctFieldName?: string,
      ConditionFieldName?: string
    ): number;
  };

  GetDataSetRowCount: { (FieldPath: string): number };
  GetDataSetRowIndex: { (FieldPath: string): number };

  GetDataSetSUM: {
    (
      FieldPath: string,
      DistinctFieldName?: string,
      ConditionFieldName?: string
    ): number;
  };

  GetDataSetValue: { (FieldPath: string, RowIndex?: number): Scalar };

  IsDataSetLastRow: { (DataSetPath: string): boolean };
  IsDataSetValueNull: {
    (DataSetPath: string, IgnoreGrouping: boolean): boolean;
  };
}
