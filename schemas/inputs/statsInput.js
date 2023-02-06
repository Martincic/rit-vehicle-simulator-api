import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLInputObjectType, GraphQLInt, GraphQLBoolean, GraphQLFloat } from 'graphql';

export const StatisticInputType = new GraphQLInputObjectType({
    name: "CarStatisticsInput",
    fields: () => ({                
    speed: { type: GraphQLInt },
    hvac: { type: GraphQLBoolean },
    stateOfCharge: { type: GraphQLInt },
    latitude: { type: GraphQLFloat },
    longitude: { type: GraphQLFloat },
    })
});