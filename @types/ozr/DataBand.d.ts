interface DataBand extends Band {
  GetBindingOrderList: { (): string };

  GetDataSetName: { (): string };

  GetDummyFooterCount: { (): number };
  GetDummyHeaderCount: { (): number };

  GetMasterName: { (): string };

  GetODIName: { (): string };

  GetSubBandCount: { (): number };

  IsAutoSize: { (): boolean };

  IsEmptyDataBand: { (): boolean };

  IsFixMaster: { (): boolean };
  IsFixPriorGroupHeader: { (): boolean };
  IsFixTitle: { (): boolean };

  SetAutoSize: { (AutoSize: boolean): void };
  SetBindingOrderList: { (BindingOrderList: string): void };

  SetFixMaster: { (FixMaster: boolean): void };
  SetFixPriorGroupHeader: { (FixPriorGroupHeader: boolean): void };
  SetFixTitle: { (FixTitle: boolean): void };
}
