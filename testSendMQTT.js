import dotenv from 'dotenv'
import mqtt from 'mqtt'
dotenv.config({ path: ".env.dev" })

const options = {
  host: process.env.HOST,
  port: process.env.PORT,
  protocol: 'mqtts',
  username: process.env.RIMACUSER,
  password: process.env.PASSWORD,
}
const client = mqtt.connect(options);

// Car ID is first argument
const carID = process.argv[2];

// Car ID is first argument
const column = process.argv[3];

// Car ID is first argument
const value = process.argv[4];

if(!carID) {
    throw new Error("First argument missing! Please give car ID as first argument.")
}

if(!column) {
    throw new Error("Second argument missing! Please give column which you wish to change as second argument.")
}

if(!value) {
    throw new Error("Third argument missing! Please give value which you wish to update as third argument.")
}

client.on('connect', function () {
  console.log("Connected...")
  client.publish('rimacVehicleMobile/'+carID, '{"command":"'+column+'", "value":"'+value+'"}')
  client.subscribe('rimacVehicleWeb/'+carID)
})

client.on('message', function (topic, message) {
  let response = "i have received: " + message.toString() + " from topic: " + topic.toString();
  console.log(response)
  client.end();
})
