import { PancakageFactory } from "./pancakage.factory";

export enum PackageType {
  FIXED = 'FIXED',
  HOUR_FLEX = 'HOUR_FLEX',
  STEPPING = 'STEPPING',
  UNKNOWN = 'UNKNOWN',
}

export class Billing {
  private vatRate = 7.0;
  private totalHours: number;
  private packageType: PackageType;

  constructor(totalHours: number, packageType: PackageType) {
    this.totalHours = totalHours;
    this.packageType = packageType;
  }

  public monthlyBill(): number {
    const total = PancakageFactory
      .createPackage(this.packageType)
      .monthlyBill(this.totalHours);
    return total + total * this.vatRate / 100;
  }
}
