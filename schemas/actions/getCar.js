import { GraphQLInt, GraphQLList } from "graphql"
import carModel from "../../model/carModel.js";
import { CarType } from "../objects/car.js"

export const getCar = {
    type: CarType,
    args:{
      carId: { type: GraphQLInt },
    },
    async resolve(parent, args) {
      return await carModel.findById(args.carId);
    }
  }
