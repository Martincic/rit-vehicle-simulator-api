import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';

export const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        bearer_token: { type: GraphQLString }
    })
});