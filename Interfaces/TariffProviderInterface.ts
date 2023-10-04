import { TariffServiceInterface } from "./TariffServiceInterface";

export interface ComparedResultInterface {
    tariff_name: string;
    annual_cost: string;
    id: number;
}

export interface TarriffProviderInterface {
    load: (service: TariffServiceInterface) => void;
    compare: (consumption: number) => Array<ComparedResultInterface>
}

