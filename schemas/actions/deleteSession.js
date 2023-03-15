import { GraphQLBoolean, GraphQLInt, GraphQLString } from "graphql"
import carModel from "../../model/carModel.js";
import sessionModel from "../../model/sessionModel.js";
import userModel from "../../model/userModel.js";

export const deleteSession = {
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
      await userModel.checkIfUserOwnsSession(user.id, args.id);
    }
    catch(err) { throw new Error("You do not own this session!") }

    return await sessionModel.deleteSession(args.id);
  }
}
