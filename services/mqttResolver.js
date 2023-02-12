
import dotenv from 'dotenv'
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

        console.log("VALID: ", command.command)
        console.log("id: ", ID)
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