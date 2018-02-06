interface ComponentMeasurable {
    GetHeight: { (  ): number};
    GetWidth: { (  ): number};
    // setter는 제외. (컴퍼넌트에 필수적으로 종속되지 않는다.)
}