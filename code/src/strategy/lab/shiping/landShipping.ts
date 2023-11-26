import { ShippingType } from "./shipingType";

export class LandShipping implements ShippingType {
    calculateCost(distance: number, weight: number, hight: number) {
        return (distance * 1.2) + (weight * 1.2) + (hight * 1.2);
    }
}
