import { Product } from '../factory/Product';
import { TariffModel } from '../factory/TariffModel';
import { ProductInterface  } from '../Interfaces/ProductInterface';
import {TariffServiceInterface} from "../Interfaces/TariffServiceInterface";



// Create a mock TariffService for testing
class MockTariffServiceProivder implements TariffServiceInterface {
  get(): ProductInterface[] {
    return  [
        {"name": "Product A", "type": 1, "baseCost": 5, "additionalKwhCost": 22},
        {"name": "Product B", "type": 2, "includedKwh": 4000, "baseCost": 800,
       "additionalKwhCost": 30}
    ].map((payload)=>{
        return new Product(payload)
    })
  }
}

describe('TariffModel', () => {
  let tariffModel: TariffModel;

  beforeEach(() => {
    // Create a new TariffModel instance with the mock service
    tariffModel = new TariffModel(new MockTariffServiceProivder());
  });

  it('should load products from the service', () => {
    expect(tariffModel['products']).toHaveLength(2); // Assuming two products in the mock service
  });

  it('should compare tariffs and return sorted results', () => {
    const results = tariffModel.compare(1000); // Assuming a consumption value

    expect(results).toHaveLength(2); // Assuming two products in the mock service
    // Check that the results are sorted by annual cost
    expect(results[0].tariff_name).toBe('Product A');
    expect(results[1].tariff_name).toBe('Product B');
  });

  it('should sort products by consumption', () => {
    const results = tariffModel.compare(1000); // Assuming a consumption value
    const sortedProducts = tariffModel.sort(tariffModel.getProducts());
    
    // Check that the products are sorted by consumption
    expect(sortedProducts[0].name).toBe('Product A');
    expect(sortedProducts[1].name).toBe('Product B');
  });
});
