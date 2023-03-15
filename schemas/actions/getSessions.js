import { GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLString } from "graphql"
import sessionModel from "../../model/sessionModel.js";
import userModel from "../../model/userModel.js";
import { SessionType } from "../objects/session.js";

export const getSessions = {
    type: GraphQLList(SessionType),
    args:{
      token: { type: GraphQLNonNull(GraphQLString) },
    },
    async resolve(parent, args) {
      let user;
      try {
        user = await userModel.findBearer(args.token);
      }
      catch(err) {
        console.log(err);
        throw new Error("Invalid token!");
      }

      return await sessionModel.getSessionsForUser(user.id);
    }
  }
