import { GashaponMachine } from "../gachaponMachine";
import { GashaponCapsule } from "../gashaponCapsule";
import { GashaponMachineState } from "../gashaponMachineState";

describe('GachaponMachine', () => {
  it('should be out of capsules when init', () => {
    const gachaponMachine = new GashaponMachine();
    expect(gachaponMachine.getState()).toBe(GashaponMachineState.outOfCapsule);
  })

  it('should be ready state when reload capsules', () => {
    const gachaponMachine = new GashaponMachine();
    gachaponMachine.reload([
      new GashaponCapsule('Luffy'),
      new GashaponCapsule('Nami'),
    ]);
    expect(gachaponMachine.getState()).toEqual(GashaponMachineState.ready);
    expect(gachaponMachine.getRemainCapsule()).toEqual(2);
  });

  it('should be has coin state when insert coin', () => {
    const gachaponMachine = new GashaponMachine();
    gachaponMachine.reload([
      new GashaponCapsule('Luffy'),
      new GashaponCapsule('Nami'),
    ]);
    expect(() => gachaponMachine.ejectCoins()).toThrowError('You haven\'t insert any coin');

    gachaponMachine.insertCoin();
    expect(gachaponMachine.getCoins()).toEqual(1);
    expect(gachaponMachine.getState()).toEqual(GashaponMachineState.hasCoin);

    gachaponMachine.insertCoin();
    gachaponMachine.insertCoin();
    gachaponMachine.insertCoin();
    expect(gachaponMachine.getCoins()).toEqual(4);
    expect(gachaponMachine.getState()).toEqual(GashaponMachineState.readyToSpin);
  });

});
