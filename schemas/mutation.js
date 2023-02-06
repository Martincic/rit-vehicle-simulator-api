import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';
import { CarInputType } from './inputs/carInput.js';
import { CarType } from "./objects/car.js"

export const mutationSchema = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    updateCar: {
      type: CarType,
      args: {
          id: { type: GraphQLInt },
          input: { type: CarInputType },
      },
      async resolve(parent, args) {
        return args.input;
        // return userModel.loginUser(args.email, args.password);
      }
    }
  }
})