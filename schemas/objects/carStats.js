import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLFloat, GraphQLNonNull } from 'graphql';
import userModel from '../../model/userModel.js';
import { UserType } from './user.js';

export const CarStatisticType = new GraphQLObjectType({
    name: "CarStatistics",
    fields: () => ({
        speed: { type: GraphQLInt },
        hvac: { type: GraphQLBoolean },
        stateOfCharge: { type: GraphQLInt },
        latitude: { type: GraphQLFloat },
        longitude: { type: GraphQLFloat },
    })
});