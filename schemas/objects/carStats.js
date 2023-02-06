import { GraphQLObjectType, GraphQLInt, GraphQLBoolean, GraphQLFloat } from 'graphql';

export const CarStatisticType = new GraphQLObjectType({
    name: "CarStatistics",
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