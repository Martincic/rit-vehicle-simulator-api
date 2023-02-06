import { GraphQLNonNull, GraphQLString } from "graphql"
import userModel from "../../model/userModel.js";
import { UserType } from "../objects/user.js"
import { connection } from "../../services/database.js"

export const loginField = {
    type: UserType,
    args: {
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
    },
    async resolve(parent, args) {
      return userModel.loginUser(args.email, args.password);
    }
  }