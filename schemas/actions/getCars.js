import { GraphQLList, GraphQLNonNull, GraphQLString } from "graphql"
import carModel from "../../model/carModel.js";
import userModel from "../../model/userModel.js";
import { CarType } from "../objects/car.js"

export const getCars = {
    type: GraphQLList(CarType),
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

      return await carModel.getCarsForUser(user.id);
    }
  }
