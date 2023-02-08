import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLFloat, GraphQLNonNull } from 'graphql';
import userModel from '../../model/userModel.js';
import { CarStatisticType } from './carStats.js';
import { UserType } from './user.js';

export const CarType = new GraphQLObjectType({
    name: "Car",
    description:"Car object which belongs to some user.",
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        user: { 
            type: GraphQLNonNull(UserType),
            async resolve(parent, args) {
              return await userModel.findById(parent.user_id);
            }
        },
        nickname: { type: GraphQLString },
        description: { type: GraphQLString },
        statistics: { 
            type: CarStatisticType,
            resolve(parent, args) {
                return { 
                    speed: parent.speed,
                    hvac: parent.hvac,
                    stateOfCharge: parent.stateOfCharge,
                    latitude: parent.latitude,
                    longitude: parent.longitude,
                };
            }
        }
    })
});