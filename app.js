// Import Express app and init
import { graphqlHTTP } from 'express-graphql';
import express from 'express';
var app = express();

// Import config
import { router } from "./router.js";
import { schema } from "./schemas/master.js";

// Setup the endpoint
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: router,
  graphiql: true,
}));

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

console.log("Listening for MQTT messages...")
client.subscribe('rimacMobileTeam/1')
client.on('message', function (topic, message) {
    console.log("RECEIVED: " + message)
})

// Start the application
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');