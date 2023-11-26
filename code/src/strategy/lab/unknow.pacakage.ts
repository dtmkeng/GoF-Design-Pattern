
import { BillingType } from "./billing.type";

export class UnknownPackage implements BillingType {
  public monthlyBill(_: number): number {
    return 0;
  }
}
