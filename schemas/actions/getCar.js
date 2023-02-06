import { GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLString } from "graphql"
import carModel from "../../model/carModel.js";
import { CarType } from "../objects/car.js"

export const getCar = {
    type: CarType,
    args:{
      carId: { type: GraphQLNonNull(GraphQLInt) },
      token: { type: GraphQLNonNull(GraphQLString) }
    },
    async resolve(parent, args) {
      return await carModel.findById(args.carId, args.token);
    }
  }
