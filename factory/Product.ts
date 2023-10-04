import { ProductInterface, ProductPropsInterface } from "../Interfaces/ProductInterface";

export class Product implements ProductInterface {

    public name: string;
    public type: number;
    public baseCost: number;
    public additionalKwhCost: number;
    private consumption: number = 0;
    private currency = "€";
    public includedKwh: number | undefined;

    constructor(payload: ProductPropsInterface) {
        
        this.name = payload.name;
        this.type = payload.type;
        this.baseCost = payload.baseCost;
        this.additionalKwhCost = payload.additionalKwhCost;
        this.includedKwh = payload.includedKwh
    }

    setCurrency (value: string){
        this.currency = value;
    };
    getCurrency () {
        return this.currency;
    }
  
    calculate(consumption: number){
        switch (this.type) {
            case 1:
                return this.setConsumption(this.calculateCostForProductA(consumption));
            case 2:
                return this.setConsumption(this.calculateCostForProductB(consumption));
            default:
                return 0; // Handle other product types if needed
        }
    };

    setConsumption(value: number){
        this.consumption = value;
    }

    getConsumption(){
        return this.consumption;
    }
    
    calculateCostForProductA(consumption: number): number {
        return this.baseCost * 12 + consumption * this.additionalKwhCost;
    }
    
    calculateCostForProductB(consumption: number): number {
        if (this.includedKwh !== undefined) {
            if (consumption <= this.includedKwh) {
                return this.baseCost;
            } else {
                return this.baseCost + (consumption - this.includedKwh) * this.additionalKwhCost;
            }
        } else {
            return 0; // Handle the case where includedKwh is not defined for Product B
        }
    }
}