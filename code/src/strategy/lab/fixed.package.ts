import { BillingType } from "./billing.type";

export class FixedPackage implements BillingType {
  monthlyBill(_: number): number {
    return 500;
  }
}
