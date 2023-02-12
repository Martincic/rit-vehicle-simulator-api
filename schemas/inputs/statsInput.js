import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLInputObjectType, GraphQLInt, GraphQLBoolean, GraphQLFloat } from 'graphql';

export const StatisticInputType = new GraphQLInputObjectType({
    name: "CarStatisticsInput",
    description:"These fields are inputs for car statistics. Whichever field, or group of fields is updated, the information will be published to MQTT Broker.",
    fields: () => ({                
        speed: { type: GraphQLInt },
        hvac: { type: GraphQLBoolean },
        stateOfCharge: { type: GraphQLInt },
        latitude: { type: GraphQLFloat },
        longitude: { type: GraphQLFloat },
    })
});