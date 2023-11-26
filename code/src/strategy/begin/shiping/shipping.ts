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
        return (this.distance * 1.5) + (this.weight * 2) + (this.hight * 1.2);
      } else if (this.type === ShippingType.Sea) {
        return (this.distance * 1) + (this.weight * 1.5) + (this.hight * 1.5);
      } else if (this.type === ShippingType.Land) {
        return (this.distance * 1.2) + (this.weight * 1.2) + (this.hight * 1.2);
      }
      return 0;
    }
}
