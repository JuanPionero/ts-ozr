interface DataBand extends Band, DataSetOrderList, DummyHeaderFooterCountable {
  GetBindingOrderList: { (): string };

  GetDataSetName: { (): string };

  GetMasterName: { (): string };

  GetODIName: { (): string };

  GetSubBandCount: { (): number };

  IsAutoSize: { (): boolean };

  IsEmptyDataBand: { (): boolean };

  IsFixMaster: { (): boolean };
  IsFixPriorGroupHeader: { (): boolean };
  IsFixTitle: { (): boolean };

  SetAutoSize: { (AutoSize: boolean): void };

  SetFixMaster: { (FixMaster: boolean): void };
  SetFixPriorGroupHeader: { (FixPriorGroupHeader: boolean): void };
  SetFixTitle: { (FixTitle: boolean): void };
}
