import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';

export const UserType = new GraphQLObjectType({
    name: "User",
    description: "User type representing a user",
    fields: () => ({
        id: { type: GraphQLInt },
        full_name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        bearer_token: { type: GraphQLString }
    })
});