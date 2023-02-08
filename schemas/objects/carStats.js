import { GraphQLObjectType, GraphQLInt, GraphQLBoolean, GraphQLFloat } from 'graphql';

export const CarStatisticType = new GraphQLObjectType({
    name: "CarStatistics",
    description:"These fields can be updated at any moment via MQTT so refresh them continiously on the screen in order to have 'live' feed.",
    fields: () => ({
        speed: { 
            type: GraphQLInt,
            resolve(parent) { return parent.speed }
        },
        hvac: { 
            type: GraphQLBoolean,
            resolve(parent) { return parent.hvac }
        },
        stateOfCharge: { 
            type: GraphQLInt,
            resolve(parent) { return parent.stateOfCharge }
        },
        latitude: { 
            type: GraphQLFloat,
            resolve(parent) { return parent.latitude }
        },
        longitude: { 
            type: GraphQLFloat,
            resolve(parent) { return parent.longitude }
        },
    })
});