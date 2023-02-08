import { GraphQLObjectType } from 'graphql';
import { createCar } from './actions/createCar.js';
import { updateCar } from './actions/updateCar.js';

export const mutationSchema = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    updateCar: updateCar,
    createCar: createCar,
  }
})

