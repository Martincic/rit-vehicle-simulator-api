import { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList } from 'graphql';
import { loginField } from './actions/login.js';
import { getCars } from './actions/getCars.js';
import { getCar } from './actions/getCar.js';
import { registerField } from './actions/register.js';
import { mutationSchema } from './mutation.js';

const rootQuery = new GraphQLObjectType({
  name: "Query",
  description: "Used to perform GET operations.",
  fields: {
    login: loginField,
    register: registerField,
    getCars: getCars,
    getCar: getCar,
  }
});

export var masterSchema = new GraphQLSchema({ query: rootQuery, mutation: mutationSchema})