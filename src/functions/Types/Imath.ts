interface IPercentage {
    mode: "percent";
    total: number;
    amount: number;
}

interface ITotalMode {
    mode: "total";
    percent: number;
    amount: number;
}

interface IAmountMode {
    mode: "amount";
    total: number;
    percent: number;
}

export type PercentageType = IPercentage | ITotalMode | IAmountMode;