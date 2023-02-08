import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLInputObjectType } from 'graphql';

export const LoginInputType = new GraphQLInputObjectType({
    name: "LoginInput",
    description: "Login request for user",
    fields: () => ({        
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
    })
});