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

// Register CORS (allow all), register bearer middleware
app.use(cors());

// Import config
import { masterSchema } from "./schemas/master.js";
import { readme } from './readme.js';

// Setup the endpoint
app.use('/graphql', graphqlHTTP({
  schema: masterSchema(mqtt),
  graphiql: {
    editorTheme: 'solarized light',
    defaultQuery: readme
  }
}));
 
// Start the application
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');