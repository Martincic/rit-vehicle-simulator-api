import { GraphQLObjectType } from 'graphql';
import { createCar } from './actions/createCar.js';
import { deleteCar } from './actions/deleteCar.js';
import { updateCar } from './actions/updateCar.js';
import { createNewSession } from './actions/createNewSession.js';
import { deleteSession } from './actions/deleteSession.js';
import { addSessionEntry } from './actions/addSessionEntry.js';

export function mutationSchema(mqtt) {
    return new GraphQLObjectType({
    name: "Mutation",
    description: "Used to perform modification and update operations.",
    fields: {
      updateCar: updateCar(mqtt),
      createCar: createCar,
      deleteCar: deleteCar,
      createNewSession: createNewSession,
      deleteSession: deleteSession,
      addSessionEntry: addSessionEntry
    }
  })
}