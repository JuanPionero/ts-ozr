    interface IOZGlobal {
    //ozr가 포함하는 모든 api
    }
    interface IOZReportTemplate {
    //ozr가 포함하는 모든 api
        SetGlobal?:{(key: string, value: any):void};
    }
    interface IOZRBand {
    
    }
    interface IOZRComponent {
    
    }
    interface IOZModuleConstructor {
        new (G: IOZGlobal, R: IOZReportTemplate);
    }
    interface IOZModule {
        set:{(key: string, value: any):void};
    }
    
    
    class _G implements IOZModule {
        Global: IOZGlobal;
        ReportTemplate: IOZReportTemplate;
        constructor(G: IOZGlobal, R: IOZReportTemplate) {
            this.Global = G; this.ReportTemplate = R;
        }
        set(key: string, value: any) {
            if(this.ReportTemplate.SetGlobal) {
                this.ReportTemplate.SetGlobal(key, value);
            }
      }
    }

var a = new _G({},{});
    
    