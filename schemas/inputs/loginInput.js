import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLInputObjectType } from 'graphql';

export const LoginInputType = new GraphQLInputObjectType({
    name: "LoginInput",
    fields: () => ({        
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
    })
});