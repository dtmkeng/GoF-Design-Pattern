import { BillingType } from "./billing.type";

export class HourFlexPackage implements BillingType {
    monthlyBill(totalHours: number) {
        return totalHours * 50;
    }
}
