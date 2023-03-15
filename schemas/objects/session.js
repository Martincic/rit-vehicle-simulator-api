import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLFloat, GraphQLNonNull } from 'graphql';
import userModel from '../../model/userModel.js';
import { CarStatisticType } from './carStats.js';
import { UserType } from './user.js';

export const SessionType = new GraphQLObjectType({
    name: "Session",
    description:"Session object - representing cars state at timestamp.",
    fields: () => ({
        session_id: { type: GraphQLInt },
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