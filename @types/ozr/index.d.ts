type Scalar = string | number;
type GlobalAssignable = Scalar | object | null;
type OZRComponent = 
    ReportTemplate | Report | Band | 
    Chart | Crosstab | GanttChart | Region | Table | 
    Label | FixedTableLabel | Note | Shape ;