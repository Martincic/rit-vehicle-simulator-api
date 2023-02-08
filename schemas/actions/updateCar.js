import { GraphQLInt, GraphQLString } from "graphql"
import carModel from "../../model/carModel.js";
import { CarType } from "../objects/car.js"
import { CarInputType } from "../inputs/carInput.js";

export const updateCar = {
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