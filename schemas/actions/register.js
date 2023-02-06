import { GraphQLNonNull, GraphQLString } from "graphql"
import userModel from "../../model/userModel.js";
import { UserType } from "../objects/user.js"
import { connection } from "../../services/database.js"

export const registerField = {
    type: UserType,
    args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
    },
    async resolve(parent, args) {

      return await userModel.registerUser(args.name, args.email, args.password);
    }
  }