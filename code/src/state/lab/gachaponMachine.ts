import { GashaponCapsule } from "./gashaponCapsule";
import { GashaponMachineState } from "./gashaponMachineState";
import { GashaponStats } from "./stats/gashaponStats";
import { HasCoinState } from "./stats/hasCoinStats";
import { ReadyState } from "./stats/readyState";

export class GashaponMachine {

  // Machine
  private coins = 0;
  private state: GashaponMachineState = GashaponMachineState.outOfCapsule;
  private capsules: GashaponCapsule[] = [];
  private machineStats: GashaponStats | undefined;
  private needCoin: number = 4;

  getCoins(): number {
    return this.coins;
  }

  addCoin(): void {
    this.coins += 1;
  }

  insertCoin(): void {
    if (this.machineStats == null) {
      return;
    }
    this.machineStats.insertCoin();
  }

  ejectCoins(): number {
    if (this.machineStats == null) {
      return 0;
    }
    return this.machineStats.ejectCoins();
  }

  returnCoins(): number {
    const coins = this.coins;
    this.coins = 0;
    return coins;
  }

  getNeedCoin(): number {
    return this.needCoin;
  }

  setState(state: GashaponMachineState) {
    this.state = state;
    if (this.state === GashaponMachineState.ready) {
      this.machineStats = new ReadyState(this);
    }
    if (this.state === GashaponMachineState.hasCoin) {
      this.machineStats = new HasCoinState(this);
    }
  }

  getState(): GashaponMachineState {
    return this.state;
  }

  reload(_capsules: GashaponCapsule[]): void {
    this.capsules = [...this.capsules, ..._capsules];
    this.setState(GashaponMachineState.ready);
  }

  getRemainCapsule(): any {
    return this.capsules.length;
  }
}
