import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLFloat } from 'graphql';
import userModel from '../../model/userModel.js';
import { UserType } from './user.js';

export const CarType = new GraphQLObjectType({
    name: "Car",
    fields: () => ({
        id: { type: GraphQLInt },
        user: { 
            type: UserType,
            async resolve(parent, args) {
              return await userModel.findById(parent.user_id);
            }
        },
        nickname: { type: GraphQLString },
        description: { type: GraphQLString },
        speed: { type: GraphQLInt },
        hvac: { type: GraphQLBoolean },
        stateOfCharge: { type: GraphQLInt },
        latitude: { type: GraphQLFloat },
        longitude: { type: GraphQLFloat },
    })
});