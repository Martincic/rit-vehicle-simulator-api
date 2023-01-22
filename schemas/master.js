import {buildSchema} from 'graphql';

// Construct a schema, using GraphQL schema language
export var schema = buildSchema(`
  type Query {
    speed: Int
    HVAC: Boolean,
    stateOfCharge: Int,
    latitude: Float,
    longitude: Float,
  }
`);