import { Command } from "./command/command";

export class Controller {
    executeCommands(command: Command) {
      command.execute();
    }
}
