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

if(!carID) {
    throw new Error("First argument missing! Please give car ID as first argument.")
}

client.on('connect', function () {
  console.log("Connected and listening to id: "+carID+"...")
  client.subscribe('rimacVehicleWeb/'+carID)
  client.subscribe('rimacVehicleMobile/'+carID)
})

client.on('message', function (topic, message) {
  let response = "i have received: " + message.toString() + " from topic: " + topic.toString();
  console.log(response)
})
