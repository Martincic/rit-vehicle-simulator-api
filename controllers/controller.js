import mqttService from "../services/mqttService.js";
let mqtt = new mqttService();

// Main schema controller

export default class {

    // Random percentage between 0 - 100
    stateOfCharge(args) {
        let value = Math.round(Math.random()*100);
        
        mqtt.sendMessage(1, 'stateOfCharge', args.state);

        return value;
    }

    // Random boolean (true/false)
    HVAC(args) {
        let value = (Math.random() < 0.5)
        
        mqtt.sendMessage(1, 'HVAC', args.status);
        return value;
    }

    // Random integer between 0 - 300 (kmh)
    speed(args) {
        let value = Math.round(Math.random()*300);
        
        mqtt.sendMessage(1, 'speed', args.speed);
        return value;
    }

    // Random latitude/longitude with 3 decimals
    latitude(args)
    {
        let num = Math.random()*180;
        let posorneg = Math.floor(Math.random());
        let value = 0;

        if (posorneg == 0) value = (num * -1).toFixed(6);
        value = num.toFixed(6);
        
        mqtt.sendMessage(1, 'latitude', args.lat);
        return value;
    }

    longitude(args)
    {
        let num = Math.random()*180;
        let posorneg = Math.floor(Math.random());
        let value = 0;

        if (posorneg == 0) value = (num * -1).toFixed(6);
        value = num.toFixed(6);
        
        mqtt.sendMessage(1, 'longitude', args.lon);
        return value;
    }
}