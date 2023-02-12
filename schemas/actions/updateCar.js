import { GraphQLInt, GraphQLString } from "graphql"
import carModel from "../../model/carModel.js";
import { CarType } from "../objects/car.js"
import { CarInputType } from "../inputs/carInput.js";
import userModel from "../../model/userModel.js";

export function updateCar(mqtt){
  return {
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

      try{
        await userModel.checkIfUserOwnsCar(user.id, args.id);
      }
      catch(err) { throw new Error("You do not own this vehicle!") }

      return await carModel.updateCar(args.id, args.input, mqtt)
    }
  }
}