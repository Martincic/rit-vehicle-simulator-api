import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLFloat, GraphQLNonNull } from 'graphql';
import { CarStatisticType } from './carStats.js';

export const SessionType = new GraphQLObjectType({
    name: "Session",
    description:"Session object - representing cars state at timestamp.",
    fields: () => ({
        session_id: { type: GraphQLInt },
        created_at_formated: { 
            type: GraphQLString,
            resolve(parent, args) {
                return new Date(parent.created_at).toUTCString()
            }
        },
        created_at: { type: GraphQLString },
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

