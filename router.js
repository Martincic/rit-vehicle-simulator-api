
import Controller from './controllers/controller.js';
var controller = new Controller()

// The root provides a resolver function for each API endpoint
export var router = {
    stateOfCharge: (args) => controller.stateOfCharge(args),
    speed: (args) => controller.speed(args),
    HVAC: (args) => controller.HVAC(args),
    latitude: (args) => controller.latitude(args),
    longitude: (args) => controller.longitude(args),
    test: () => { return "Hello World!" }
};