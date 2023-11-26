import { GarageDoorDownCommand, GarageDoorLightOffCommand, GarageDoorLightOnCommand, GarageDoorStopCommand, GarageDoorUpCommand } from "./command/garageDoorCommand";
import { LightOffCommand, LightOnCommand } from "./command/lightCommand";
import { Controller } from "./controller";
import { GarageDoor, Light } from "./devices";

describe('[Command - lab] Controller', () => {
  describe('Light', () => {
    it('should execute device taht wrapped with command object', () => {
      // Given
      const controller = new Controller();
      const light = new Light();
      light.on = jest.fn();
      light.off = jest.fn();
      const lightOnCommand = new LightOnCommand(light);
      const lightOffCommand = new LightOffCommand(light);

      // When
      controller.executeCommands(lightOnCommand);
      expect(light.on).toBeCalledTimes(1);

      controller.executeCommands(lightOffCommand);
      expect(light.off).toBeCalledTimes(1);
    });
  });


  describe('GarageDoor', () => {
    it('should execute device taht wrapped with command object', () => {
      // Given
      const controller = new Controller();
      const garageDoor = new GarageDoor();
      garageDoor.up = jest.fn();
      garageDoor.down = jest.fn();
      garageDoor.stop = jest.fn();
      garageDoor.lightOn = jest.fn();
      garageDoor.lightOff = jest.fn();
      const garageDoorUpCommand = new GarageDoorUpCommand(garageDoor);
      const garageDoorDownCommand = new GarageDoorDownCommand(garageDoor);
      const garageDoorStopCommand = new GarageDoorStopCommand(garageDoor);
      const garageDoorLightOnCommand = new GarageDoorLightOnCommand(garageDoor);
      const garageDoorLightOffCommand = new GarageDoorLightOffCommand(garageDoor);

      // When
      controller.executeCommands(garageDoorUpCommand);
      expect(garageDoor.up).toBeCalledTimes(1);

      controller.executeCommands(garageDoorDownCommand);
      expect(garageDoor.down).toBeCalledTimes(1);

      controller.executeCommands(garageDoorStopCommand);
      expect(garageDoor.stop).toBeCalledTimes(1);

      controller.executeCommands(garageDoorLightOnCommand);
      expect(garageDoor.lightOn).toBeCalledTimes(1);

      controller.executeCommands(garageDoorLightOffCommand);
      expect(garageDoor.lightOff).toBeCalledTimes(1);
    });
  });
});
