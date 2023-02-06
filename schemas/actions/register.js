import { GraphQLNonNull, GraphQLString } from "graphql"
import userModel from "../../model/userModel.js";
import { UserType } from "../objects/user.js"
import { connection } from "../../services/database.js"
import { LoginInputType } from "./../inputs/loginInput.js"

export const registerField = {
    type: UserType,
    args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        input: { type: LoginInputType }
    },
    async resolve(parent, args, context, info) {
      return await userModel.registerUser(args.name, args.input.email, args.input.password);
    }
  }