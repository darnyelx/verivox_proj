import { ProductInterface } from "../../Interfaces/ProductInterface";
import { TariffServiceInterface } from "../../Interfaces/TariffServiceInterface";
import  verivoxTarriffs from "../../verivoxTariffs"
import { Product } from "../Product";

export class VerivoxProvider implements TariffServiceInterface {
    get () {
        const ProductsArray:Array<ProductInterface> = [];
        verivoxTarriffs.forEach((tariff)=>{
            return ProductsArray.push(new Product(tariff));
        });
        return ProductsArray;
    }
}