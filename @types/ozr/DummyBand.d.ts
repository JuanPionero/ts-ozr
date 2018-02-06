interface DummyBand extends Band {
    IsStopAtPageEnd: { (  ): boolean};
    SetStopAtPageEnd: { ( StopAtPageEnd: boolean ): void};
}