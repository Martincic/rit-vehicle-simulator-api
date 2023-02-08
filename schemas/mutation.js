import { GraphQLObjectType } from 'graphql';
import { createCar } from './actions/createCar.js';
import { deleteCar } from './actions/deleteCar.js';
import { updateCar } from './actions/updateCar.js';

export const mutationSchema = new GraphQLObjectType({
  name: "Mutation",
  description: "Used to perform modification and update operations.",
  fields: {
    updateCar: updateCar,
    createCar: createCar,
    deleteCar: deleteCar
  }
})

