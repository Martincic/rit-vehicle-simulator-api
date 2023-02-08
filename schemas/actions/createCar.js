import { GraphQLBoolean, GraphQLString } from "graphql"
import carModel from "../../model/carModel.js";
import userModel from "../../model/userModel.js";

export const createCar = {
  type: GraphQLBoolean,
  args: {
      token: { type: GraphQLString },
      nickname: { type: GraphQLString },
      description: { type: GraphQLString },
  },
  async resolve(parent, args) {
    let user;
    try {
      user = await userModel.findBearer(args.token);
      if(!user) throw new Error()
    }
    catch(err) {
      throw new Error("Invalid token!")
    }

    return await carModel.createCar(args, user.id);
  }
}