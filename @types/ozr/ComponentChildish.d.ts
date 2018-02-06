interface ComponentChildish {
    // report template를 제외한 모든 컴포넌트.
    GetName: { (  ): string};
    GetParent: { (  ): object};
    GetReport: { (  ): Report};
    GetReportTemplate: { (  ): ReportTemplate};
}