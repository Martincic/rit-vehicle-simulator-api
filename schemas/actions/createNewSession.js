import { GraphQLInt, GraphQLString } from "graphql"
import carModel from "../../model/carModel.js";
import sessionModel from "../../model/sessionModel.js";
import userModel from "../../model/userModel.js";

export const createNewSession = {
  type: GraphQLInt,
  args: {
      token: { type: GraphQLString },
  },
  async resolve(parent, args) {
    let user;
    try {
      user = await userModel.findBearer(args.token);
      if(!user) throw new Error("Invalid token")
    }
    catch(err) {
      throw new Error("Invalid token!")
    }

    return await sessionModel.createSession(user.id);
  }
}