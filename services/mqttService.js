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
    static sendMessage(ID, field, value) 
    {
        const client = mqtt.connect(options); 
        client.on('connect', function () {
            console.log("connected...")
            let message = `{"${field}":"${value}"}`;
            let carID = `rimacWebTeam/${ID}`;
    
            client.publish(carID, message, [{ retain: true}, { qos: 2}]);
            client.end()
    
            console.log(`Message dispatched to car: ${carID}`)
            console.log(`VALUE: ${message}`)
        })
    }

    listen(channel) 
    {
        const client = mqtt.connect(options); 
        client.on('connect', function () {
            client.subscribe('rimacMobileTeam/1')
        })

        client.on('message', function (topic, message) {
            console.log("RECEIVED!")
            console.log("Topic: "+topic)
            console.log("Data: "+message)
        });
    }
}