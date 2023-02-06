import { GraphQLList, GraphQLString } from "graphql"
import carModel from "../../model/carModel.js";
import userModel from "../../model/userModel.js";
import { CarType } from "../objects/car.js"

export const getCars = {
    type: GraphQLList(CarType),
    args:{
      token: { type: GraphQLString },
    },
    async resolve(parent, args) {
      let user = await userModel.findBearer(args.token);

      return await carModel.getCarsForUser(user.id);
    }
  }
