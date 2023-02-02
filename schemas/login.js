import { GraphQLString } from "graphql"
import userModel from "../../model/userModel.js";
import { UserType } from "../../schemas/objects/user.js"
import { connection } from "../../services/database.js"

export const loginField = {
    type: UserType,
    args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    async resolve(parent, args) {

      let password = connection.escape(args.password);
      let email = connection.escape(args.email);
      
      return userModel.loginUser(email, password);
    }
  }