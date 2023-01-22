import {buildSchema} from 'graphql';

// Construct a schema, using GraphQL schema language
export var schema = buildSchema(`
  type Query {
    speed(speed: Int): Int
    HVAC(status: Boolean): Boolean,
    stateOfCharge(state: Int): Int,
    latitude(lat: Float): Float,
    longitude(lon: Float): Float,
  }
`);