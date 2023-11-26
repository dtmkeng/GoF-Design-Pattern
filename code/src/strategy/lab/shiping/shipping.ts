import { AirShipping } from "./airShipping";
import { LandShipping } from "./landShipping";
import { SeaShipping } from "./seaShipping";

export enum ShippingType {
    Air,
    Sea,
    Land,
    Local
}

export class ShipingStartegy {
    distance: number;
    weight: number;
    hight: number;
    type: ShippingType;

    constructor(distance: number, weight: number, hight: number, type: ShippingType) {
        this.distance = distance;
        this.weight = weight;
        this.hight = hight;
        this.type = type;
    }

    // if type air distance factor is 1.5, weight factor is 2, hight factor is 1.2
    // if type sea distance factor is 1, weight factor is 1.5, hight factor is 1.5
    // if type land distance factor is 1.2, weight factor is 1.2, hight factor is 1.2
    // if type local distance factor is 1, weight factor is 1, hight factor is 1
    calcualteCost(): number {
      if (this.type === ShippingType.Air) {
        return new AirShipping().calculateCost(this.distance, this.weight, this.hight);
      } else if (this.type === ShippingType.Sea) {
        return new SeaShipping().calculateCost(this.distance, this.weight, this.hight);
      } else if (this.type === ShippingType.Land) {
        return new LandShipping().calculateCost(this.distance, this.weight, this.hight);
      }
      return 0;
    }
}
