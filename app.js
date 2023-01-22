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

// Start the application
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');

import mqttService from "./services/mqttService.js";
let mqtt = new mqttService();
mqtt.listen();