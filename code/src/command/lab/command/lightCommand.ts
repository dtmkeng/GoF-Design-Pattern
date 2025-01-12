import { Light } from "../devices";
import { Command } from "./command";

export class LightOnCommand implements Command {
    private light: Light;
    constructor(light: Light) {
        this.light = light;
    }

    execute() {
      this.light.on();
    }
}

export class LightOffCommand implements Command {
    private light: Light;
    constructor(light: Light) {
        this.light = light;
    }

    execute() {
      this.light.off();
    }
}
