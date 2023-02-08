import { GraphQLObjectType } from 'graphql';
import { createCar } from './actions/createCar.js';
import { deleteCar } from './actions/deleteCar.js';
import { updateCar } from './actions/updateCar.js';

export const mutationSchema = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    updateCar: updateCar,
    createCar: createCar,
    deleteCar: deleteCar
  }
})

