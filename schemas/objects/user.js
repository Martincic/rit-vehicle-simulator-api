import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';

export const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: GraphQLInt, resolve(parent, args) { return "1"} },
        full_name: { type: GraphQLString, resolve(parent, args) { return "John Doe"} },
        email: { type: GraphQLString, resolve(parent, args) { return "john@doe.com"} },
        password: { type: GraphQLString },
        bearer_token: { type: GraphQLString }
    })
});