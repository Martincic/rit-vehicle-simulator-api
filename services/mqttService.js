import mqtt from 'mqtt'
import dotenv from 'dotenv'

dotenv.config({ path: ".env.dev" })

// Define MQTT Connection options
const options = {
    host: process.env.HOST,
    port: process.env.PORT,
    protocol: 'mqtts',
    username: process.env.RIMACUSER,
    password: process.env.PASSWORD,
}

// Export service class
export default class 
{
    sendMessage(ID, field, value) 
    {
        console.log("STATUS: ", this.client.connected)
        let message = `{"${field}":"${value}"}`;
        let carID = `rimacVehicle/${ID}`;
        this.client.publish(carID, message, [{ retain: true}, { qos: 2}]);
    
        console.log(`Message dispatched to car: ${carID}`)
        console.log(`VALUE: ${message}`)

    }

    /*
     *  This method will connect to MQTT broker and start listening   
     *  on a new channel for every car that we have in the database
     */
    listen() 
    {
        this.client = mqtt.connect(options); 
        this.client.on('connect', function () {
            console.log("Connected!")

            // TODO: Make this dynamic 
            this.subscribe('rimacVehicle/1')
            this.subscribe('rimacVehicle/2')
            this.subscribe('rimacVehicle/3')
        })

        this.client.on('message', function (topic, message) {
            console.log("RECEIVED!")
        });
    }
}