import { GraphQLBoolean, GraphQLInt, GraphQLString } from "graphql"
import sessionModel from "../../model/sessionModel.js";
import userModel from "../../model/userModel.js";
import {StatisticInputType} from "../inputs/statsInput.js";

export const addSessionEntry = {
  type: GraphQLBoolean,
  args: {
      token: { type: GraphQLString },
      id: { type: GraphQLInt },
      input: { type: StatisticInputType }
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

    try{
      await userModel.checkIfUserOwnsSession(user.id, args.id);
    }
    catch(err) { throw new Error("You do not own this session!") }

    return await sessionModel.addEntry(args.id, user.id, args.input);
  }
}