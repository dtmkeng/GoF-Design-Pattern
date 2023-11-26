import { ShippingType } from "./shipingType";

export class SeaShipping implements ShippingType {
    calculateCost(distance: number, weight: number, hight: number) {
        return (distance * 1) + (weight * 1.5) + (hight * 1.5);
    }
}
