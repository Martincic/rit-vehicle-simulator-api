import mqtt from 'mqtt'
import dotenv from 'dotenv'
dotenv.config()

// Define MQTT Connection options
const options = {
    host: process.env.HOST,
    port: process.env.PORT,
    protocol: 'mqtts',
    username: process.env.USER,
    password: process.env.PASSWORD,
}
const client = mqtt.connect(options); 

// Export service class
export default class 
{
    sendMessage(ID, field, value) 
    {
        let message = `{"${field}":"${value}"}`;
        let carID = `rimacMobileTeam/${ID}`;

        client.publish('rimacMobileTeam/1', message);
        client.end()
        console.log(`Message dispatched to car: ${carID}`)
        console.log(`VALUE: ${message}`)
    }

    // listen() {
    //     console.log("Listening for MQTT messages...")
    //     client.subscribe('rimacMobileTeam/1')
    //     client.on('message', function (topic, message) {
    //         console.log(message)
    //     })
    // }
}