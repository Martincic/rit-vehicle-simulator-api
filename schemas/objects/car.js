import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';
import { UserType } from './user.js';

export const CarType = new GraphQLObjectType({
    name: "Car",
    fields: () => ({
        id: { type: GraphQLInt },
        user: { type: UserType },
        nickname: { type: GraphQLString },
        description: { type: GraphQLString }
    })
});