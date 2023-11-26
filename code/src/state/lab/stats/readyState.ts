import { GashaponMachine } from "../gachaponMachine";
import { GashaponCapsule } from "../gashaponCapsule";
import { GashaponMachineState } from "../gashaponMachineState";
import { GashaponStats } from "./gashaponStats";

export class ReadyState implements GashaponStats {
  private gashaponMachine: GashaponMachine;
  constructor(gashaponMachine: GashaponMachine) {
    this.gashaponMachine = gashaponMachine;
  }

  insertCoin(): void {
    this.gashaponMachine.addCoin();
    if (this.gashaponMachine.getCoins() < this.gashaponMachine.getNeedCoin()) {
      this.gashaponMachine.setState(GashaponMachineState.hasCoin);
    } else {
      this.gashaponMachine.setState(GashaponMachineState.readyToSpin);
    }
  }

  ejectCoins(): number {
    throw new Error("You haven't insert any coin");
  }

  spin(): GashaponCapsule {
    throw new Error('Please insert more coin');
  }
}
