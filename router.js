
import Controller from './controllers/controller.js';
var controller = new Controller()

// The root provides a resolver function for each API endpoint
export var router = {
    stateOfCharge: () => controller.stateOfCharge(),
    speed: () => controller.speed(),
    HVAC: () => controller.HVAC(),
    latitude: () => controller.generateRandomLatLng(),
    longitude: () => controller.generateRandomLatLng()
};