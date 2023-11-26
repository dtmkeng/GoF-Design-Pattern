import { ShipingStartegy, ShippingType } from "./shipping";

describe('ShipingStartegy', () => {
  describe('calcualteCost', () => {
    it('should return correct cost for air', () => {
      // Given
      const distance = 100;
      const weight = 100;
      const hight = 100;
      const type = ShippingType.Air;

      // const expectedCost = (100 * 1.5) + (100 * 2) + (100* 1.2);
      // When
      const shippingStrategy = new ShipingStartegy(distance, weight, hight, type);
      const actualCost = shippingStrategy.calcualteCost();

      expect(actualCost).toEqual(470);
    });

    it('should return correct cost for sea', () => {
      // Given
      const distance = 100;
      const weight = 100;
      const hight = 100;
      const type = ShippingType.Sea;

      // const expectedCost = (100 * 1) + (100 * 1.5) + (100* 1.5);
      // When
      const shippingStrategy = new ShipingStartegy(distance, weight, hight, type);
      const actualCost = shippingStrategy.calcualteCost();

      expect(actualCost).toEqual(400);
    });

    it('should return correct cost for land', () => {
      // Given
      const distance = 100;
      const weight = 100;
      const hight = 100;
      const type = ShippingType.Land;

      // const expectedCost = (100 * 1.2) + (100 * 1.2) + (100* 1.2);
      // When
      const shippingStrategy = new ShipingStartegy(distance, weight, hight, type);
      const actualCost = shippingStrategy.calcualteCost();

      expect(actualCost).toEqual(360);
    });
  });
});
