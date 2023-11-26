import { ShippingType } from "./shipingType";

export class AirShipping  implements ShippingType {
    calculateCost(distance: number, weight: number, hight: number) {
      return (distance * 1.5) + (weight * 2) + (hight * 1.2);
    }
}
