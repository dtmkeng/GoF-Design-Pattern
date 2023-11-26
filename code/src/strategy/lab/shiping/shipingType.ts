export interface ShippingType {
  calculateCost(distance: number, weight: number, hight: number): number;
}
