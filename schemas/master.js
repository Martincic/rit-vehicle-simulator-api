import { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList } from 'graphql';
import { loginField } from './actions/login.js';
import { registerField } from './actions/register.js';
import { mutationSchema } from './mutation.js';

const rootQuery = new GraphQLObjectType({
  name: "Query",
  fields: {
    login: loginField,
    register: registerField
  }
});

export var masterSchema = new GraphQLSchema({ query: rootQuery, mutation: mutationSchema})