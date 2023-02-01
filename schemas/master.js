import { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList } from 'graphql';
import { loginField } from './actions/login.js';
import { mutationSchema } from './mutation.js';

const rootQuery = new GraphQLObjectType({
  name: "Query",
  fields: {
    loginDrek: loginField
  }
});

export var masterSchema = new GraphQLSchema({ query: rootQuery, mutation: mutationSchema})