import { GraphQLBoolean, GraphQLInt, GraphQLString } from "graphql"
import carModel from "../../model/carModel.js";
import userModel from "../../model/userModel.js";

export const deleteCar = {
  type: GraphQLBoolean,
  args: {
      token: { type: GraphQLString },
      id: { type: GraphQLInt },
  },
  async resolve(parent, args) {
    let user;
    try {
      user = await userModel.findBearer(args.token);
    }
    catch(err) { throw new Error("Invalid token!") }

    try{
      await userModel.checkIfUserOwnsCar(user.id, args.id);
    }
    catch(err) { throw new Error("You do not own this vehicle!") }

    return await carModel.deleteCar(args.id);
  }
}
