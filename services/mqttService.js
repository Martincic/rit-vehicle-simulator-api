import mqtt from 'mqtt'
import dotenv from 'dotenv'
import mqttResolver from './mqttResolver.js';

dotenv.config({ path: ".env.dev" })
// Define MQTT Connection options
const options = {
    host: process.env.HOST,
    port: process.env.PORT,
    protocol: 'mqtts',
    username: process.env.RIMACUSER,
    password: process.env.PASSWORD,
}

// Setup topics
const publishTopic = process.env.MQTT_PUBLISH;
const subscribeTopic = process.env.MQTT_SUBSCRIBE

// Format of broadcast messages
const messageFormat = (field, data) => {
    let $message = {
        command: field,
        value: data
    };

    return JSON.stringify($message)
}

// Export service class
export default class 
{
    /*
     *  Publish updated status of specific vehicle to MQTT broker   
     */ 
    broadcastUpdate(ID, field, value) 
    {
        const message = messageFormat(field, value);
        const topic = publishTopic+ID

        this.client.publish(topic, message, [{ retain: true}, { qos: 2}]);
    
        console.log(`Message dispatched to car: ${topic}`)
        console.log(`VALUE: ${message}`) 
    }

    /*
     *  This method will connect to MQTT broker and start listening   
     *  on a new topic for every car that we have in the database
     */ 
    listen() 
    {
        this.client = mqtt.connect(options); 
        this.client.on('connect', function () {
            console.log("Connected!")
            // TODO: refactor this to register all existing cars id's in the db 
            // Register cars
            for (let i = 0; i < 100; i++) {
                this.subscribe(subscribeTopic+i);   
            }
        })

        //Will receive commands in the following format:
        // Topic: rimacVehicleWeb/{CarID}
        // Data: {"command":"nekaCommanda", "value":"value"}
        this.client.on('message', async function (topic, message) {
            const carID = topic.split('/')[1];
            await mqttResolver.resolve(carID, message, this, topic)
        });
    }
}