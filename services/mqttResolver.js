
import dotenv from 'dotenv'
import carModel from '../model/carModel.js';
dotenv.config({ path: ".env.dev" })

// Export service class
export default class 
{
    static resolve(ID, message, client) 
    {
        let command = this.parseMessage(message, client, ID);
        console.log("resolving again!")
        if(!this.isValidCommand(command)) {
            console.log("Invalid! Sending error...");
            client.publish(process.env.MQTT_PUBLISH+ID, "Error! Invalid command sent, supported commands are: ['speed', 'hvac', 'stateOfCharge', 'latitude', 'longitude']")
            return
        }
        
        let input = JSON.parse("{\""+command.command+"\":\""+command.value+"\"}");
        carModel.updateCar(ID, {statistics: input}, this, true);

        let response = JSON.stringify({"command":command.command, "value":command.value});
        client.publish(process.env.MQTT_PUBLISH+ID, response);
    }

    // { command: 'speed', value: '155' }
    static isValidCommand(command) {
        if(command == null) return false;
        const validCommands = ['speed', 'hvac', 'stateOfCharge', 'latitude', 'longitude']

        if(validCommands.includes(command.command)) {
            return true;
        }
        return false;
    }

    static parseMessage(message, client, ID) {

        let object;
        try {
            const string = message.toString('utf-8');
            object = JSON.parse(string);
        }
        catch(err) {
            client.publish(process.env.MQTT_PUBLISH+ID, "Parsing error! Invalid JSON sent.")
            return null
        }

        return object;
    }

}