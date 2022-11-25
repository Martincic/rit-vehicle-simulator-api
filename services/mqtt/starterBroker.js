require('dotenv').config()
const mqtt = require('mqtt')

const URL = process.env.MQTT_URL
const client = mqtt.connect(URL);

client.on('connect', function () {
    console.log("Connected...")
    client.subscribe('rimacMobileTeam/1')
})

client.on('message', function (topic, message) {
    // message is Buffer
    //client.unsubscribe('rimacMobileTeam')
    console.log("i have received: " + message.toString() + " from topic: " + topic.toString())
    client.publish('rimacWebTeam/1', 'car info processed and returned', [{ retain: true }, { qos: 2 }])
})