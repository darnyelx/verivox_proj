import { ProductInterface } from "../Interfaces/ProductInterface";
import { ComparedResultInterface, TarriffProviderInterface } from "../Interfaces/TariffProviderInterface";
import { TariffServiceInterface } from "../Interfaces/TariffServiceInterface";

export class TariffModel implements TarriffProviderInterface{
    private products: Array<ProductInterface> = [];
    
    constructor(service: TariffServiceInterface){
        this.load(service);
    }
    
    load (service: TariffServiceInterface){
       this.products =  service.get()
    };

    compare(consumption: number){
        this.products.forEach((product)=>{
            product.calculate(consumption);
        });
        const sortedArray = this.sort(this.products);
        return sortedArray.map((product, id: number)=>{
            return {
                tariff_name: product.name,
                annual_cost: product.getConsumption() + ` ${product.getCurrency()}/year`,
                id: id+1
            }
        })
    }

    getProducts (){
        return this.products;
    }

    sort(products: Array<ProductInterface>){
      return  products.sort((prevProduct, nextProduct)=>{
            return prevProduct.getConsumption() - nextProduct.getConsumption();
        })
    }
    
}