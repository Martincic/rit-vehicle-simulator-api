// Import Express app and init
import { graphqlHTTP } from 'express-graphql';
import express from 'express';
import cors from 'cors';
import mqttService from "./services/mqttService.js";

// Setup MQTT Listener
let mqtt = new mqttService();
mqtt.listen();

// Setup GraphQL API
var app = express();
app.use(cors());

// Import config
import { router } from "./router.js";
import { schema } from "./schemas/master.js";

// Setup the endpoint
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: router,
  graphiql: true,
}));

// Start the application
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');