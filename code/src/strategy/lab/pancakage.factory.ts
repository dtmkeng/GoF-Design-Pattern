import { PackageType } from "./billing";
import { BillingType } from "./billing.type";
import { FixedPackage } from "./fixed.package";
import { HourFlexPackage } from "./hour.flex.pacakage";
import { SteppingPackage } from "./stepping.pacakage";
import { UnknownPackage } from "./unknow.pacakage";

export class PancakageFactory {
    static createPackage(packageType: PackageType): BillingType {
        switch (packageType) {
            case PackageType.FIXED:
                return new FixedPackage();
            case PackageType.HOUR_FLEX:
                return new HourFlexPackage();
            case PackageType.STEPPING:
                return new SteppingPackage();
            default:
                return new UnknownPackage();
        }
    }
}
