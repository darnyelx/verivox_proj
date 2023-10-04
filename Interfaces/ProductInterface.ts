export interface ProductPropsInterface {
    name: string;
    type: number;
    baseCost: number;
    additionalKwhCost: number;
    includedKwh?: number;
    
}

export interface ProductInterface extends ProductPropsInterface{
    calculate: (consumption: number) => void;
    getConsumption: () => number;
    setConsumption: (value: number) => void;
    setCurrency: (value: string) => void;
    getCurrency: () => string;
}

