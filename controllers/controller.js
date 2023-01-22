import mqttService from "../services/mqttService.js";
let mqtt = new mqttService();

// Main schema controller

export default class {

    // Random percentage between 0 - 100
    stateOfCharge() {
        let value = Math.round(Math.random()*100);
        
        mqtt.sendMessage(1, 'stateOfCharge', value);
        return value;
    }

    // Random boolean (true/false)
    HVAC() {
        let value = (Math.random() < 0.5)
        
        mqtt.sendMessage(1, 'HVAC', value);
        return value;
    }

    // Random integer between 0 - 300 (kmh)
    speed() {
        let value = Math.round(Math.random()*300);
        
        mqtt.sendMessage(1, 'speed', value);
        return value;
    }

    // Random latitude/longitude with 3 decimals
    generateRandomLatLng()
    {
        let num = Math.random()*180;
        let posorneg = Math.floor(Math.random());
        let value = 0;

        if (posorneg == 0) value = (num * -1).toFixed(6);
        value = num.toFixed(6);
        
        mqtt.sendMessage(1, 'latitude', value);
        return value;
    }
}