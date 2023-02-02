import { GraphQLList, GraphQLString } from "graphql"
import userModel from "../../model/userModel.js";
import { CarType } from "../objects/car.js"

export const getCars = {
    type: GraphQLList(CarType),
    args:{
      token: { type: GraphQLString },
    },
    async resolve(parent, args) {
      let user = await userModel.findBearer(args.token);

      return [{id: 1, user: user, nickname: "#1 Nevera", description:"lorem ipsum si nomet don oasduzma aasd lorem ipsum si nomet roausm utokans oasduzma aasd."},
              {id: 2, user: user, nickname: "#1 Traktor", description:"utokans oasduzma aasd lorem oasduzma aasd lorem ipsum si nomet ipsum si nomet don roausm ."}];
    }
  }
