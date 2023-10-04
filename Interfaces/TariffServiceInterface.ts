import { ProductInterface } from "./ProductInterface";


export interface TariffServiceInterface {
    get: () => Array<ProductInterface>
}