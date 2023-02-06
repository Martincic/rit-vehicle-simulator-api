import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';
import userModel from '../../model/userModel.js';
import { UserType } from './user.js';

export const CarType = new GraphQLObjectType({
    name: "Car",
    fields: () => ({
        id: { type: GraphQLInt },
        user: { 
            type: UserType,
            async resolve(parent, args) {
              return await userModel.findById(parent.id);
            }
        },
        nickname: { type: GraphQLString },
        description: { type: GraphQLString }
    })
});