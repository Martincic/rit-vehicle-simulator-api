import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';
import { token } from 'morgan';
import userModel from '../model/userModel.js';
import carModel from '../model/carModel.js';
import { CarInputType } from './inputs/carInput.js';
import { CarType } from "./objects/car.js"

export const mutationSchema = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    updateCar: {
      type: CarType,
      args: {
          id: { type: GraphQLInt },
          token: { type: GraphQLString },
          input: { type: CarInputType },
      },
      async resolve(parent, args) {
        let user;
        try{
          user = await userModel.findBearer(args.token);
        }
        catch(err) { throw new Error("Invalid bearer!") }

        return await carModel.updateCar(args.id, args.input)
      }
    }
  }
})