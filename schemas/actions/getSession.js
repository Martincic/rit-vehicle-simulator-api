import { GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLString } from "graphql"
import sessionModel from "../../model/sessionModel.js";
import { SessionType } from "../objects/session.js";

export const getSession = {
    type: GraphQLList(SessionType),
    args:{
      id: { type: GraphQLNonNull(GraphQLInt) },
      token: { type: GraphQLNonNull(GraphQLString) }
    },
    async resolve(parent, args) {
      return await sessionModel.findById(args.id, args.token);
    }
  }
