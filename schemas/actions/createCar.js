import { GraphQLBoolean, GraphQLString } from "graphql"
import carModel from "../../model/carModel.js";
import userModel from "../../model/userModel.js";
import { CarType } from "../objects/car.js"

export const createCar = {
  type: GraphQLBoolean,
  args: {
      token: { type: GraphQLString },
      nickname: { type: GraphQLString },
      description: { type: GraphQLString },
  },
  async resolve(parent, args) {
    let user = await userModel.findBearer(args.token);
    return await carModel.createCar(args, user.id);
  }
}
// NEMOGU NAC ENDPOINT CREATE CAR ??