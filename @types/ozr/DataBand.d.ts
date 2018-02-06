interface DataBand extends Band, DataSetLinkable, DataSetOrderList, DummyHeaderFooterCountable {
  GetBindingOrderList: { (): string };

  GetMasterName: { (): string };

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
