// 밴드에서 공통 된 부분.
interface Band extends ComponentSelectable, DataSetUsable, ComponentMeasurable, ComponentChildish {
    /**
     * Band 는 leaf 개념 적용이 살짝 난해하기에 ComponentLeaf는 상속받지 않음.
     */
    GetBand: { (  ): object};
    
    GetRepeatNumber: { (  ): void};
    
    IsEnable: { (  ): boolean};
    IsInvisible: { (  ): boolean};
    SetEnable: { ( Enable:boolean ): void};
    SetInvisible: { ( Invisible:boolean  ): void};

    IsSpaceRemained: { (  ): boolean};
    
    
    GetEmptySpace: { (): number };
    IsForceNewPage: { (  ): boolean};
    SetForceNewPage: { ( ForceNewPage: boolean ): void};
    
    SetHeight: { ( Height:number ): void};
    
    SetRepeatNumber: { ( RepeatNumber: number ): void};
    
    GetUserValue: { (  ): Scalar};
    SetUserValue: { ( UserValue: Scalar  ): void};
    
}

