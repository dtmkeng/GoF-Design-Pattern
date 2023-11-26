import { BillingType } from "./billing.type";

export class SteppingPackage implements BillingType {
    monthlyBill(totalHours: number): number {
        if (totalHours <= 50) return totalHours;
        else return 50 + (totalHours - 50) * 0.5;
    }
}
