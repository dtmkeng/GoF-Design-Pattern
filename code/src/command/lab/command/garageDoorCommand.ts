import { GarageDoor } from "../devices";
import { Command } from "./command";

export class GarageDoorUpCommand implements Command {
    private garageDoor: GarageDoor;
    constructor(private _garageDoor: GarageDoor) {
        this.garageDoor = _garageDoor;
    }

    execute() {
        this.garageDoor.up();
    }
}

export class GarageDoorDownCommand implements Command {
    private garageDoor: GarageDoor;
    constructor(private _garageDoor: GarageDoor) {
        this.garageDoor = _garageDoor;
    }

    execute() {
        this.garageDoor.down();
    }
}

export class GarageDoorStopCommand implements Command {
    private garageDoor: GarageDoor;
    constructor(private _garageDoor: GarageDoor) {
        this.garageDoor = _garageDoor;
    }

    execute() {
        this.garageDoor.stop();
    }
}

export class GarageDoorLightOnCommand implements Command {
    private garageDoor: GarageDoor;
    constructor(private _garageDoor: GarageDoor) {
        this.garageDoor = _garageDoor;
    }

    execute() {
        this.garageDoor.lightOn();
    }
}


export class GarageDoorLightOffCommand implements Command {
    private garageDoor: GarageDoor;
    constructor(private _garageDoor: GarageDoor) {
        this.garageDoor = _garageDoor;
    }

    execute() {
        this.garageDoor.lightOff();
    }
}
