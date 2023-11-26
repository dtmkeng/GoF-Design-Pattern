import { GashaponCapsule } from "../gashaponCapsule";

export interface GashaponStats {
  insertCoin(): void;
  ejectCoins(): number;
  spin(): GashaponCapsule;
  // reload(capsules: GashaponCapsule[]): void;
}
