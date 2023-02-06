import { GraphQLNonNull, GraphQLString } from "graphql"
import userModel from "../../model/userModel.js";
import { UserType } from "../objects/user.js"
import { connection } from "../../services/database.js"
import { LoginInputType } from "./../inputs/loginInput.js"

export const loginField = {
    type: UserType,
    args: {
        input: { type: LoginInputType }
    },
    async resolve(parent, args) {
      return userModel.loginUser(args.input.email, args.input.password);
    }
  }