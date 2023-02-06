import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLFloat, GraphQLNonNull } from 'graphql';
import userModel from '../../model/userModel.js';
import { UserType } from './user.js';
import mqtt from "../../services/mqttService.js";

export const CarStatisticType = new GraphQLObjectType({
    name: "CarStatistics",
    fields: () => ({
        speed: { 
            type: GraphQLInt,
            args: { value: { type: GraphQLInt }},
            resolve(parent, args) {
                if(args.value) {
                    mqtt.sendMessage(1, 'speed', args.value);
                    return args.value;
                }
                return parent.speed;
            }
        },
        hvac: { 
            type: GraphQLBoolean,
            args: { value: { type: GraphQLBoolean }},
            resolve(parent, args) {
                if(args.value) {
                    mqtt.sendMessage(1, 'hvac', args.value);
                    return args.value;
                }
                return parent.hvac;
            }
        },
        stateOfCharge: { 
            type: GraphQLInt,
            args: { value: { type: GraphQLInt }},
            resolve(parent, args) {
                if(args.value) {
                    mqtt.sendMessage(1, 'stateOfCharge', args.value);
                    return args.value;
                }
                return parent.stateOfCharge;
            }
        },
        latitude: { 
            type: GraphQLFloat,
            args: { value: { type: GraphQLFloat }},
            resolve(parent, args) {
                if(args.value) {
                    mqtt.sendMessage(1, 'latitude', args.value);
                    return args.value;
                }
                return parent.latitude;
            }
        },
        longitude: { 
            type: GraphQLFloat,
            args: { value: { type: GraphQLFloat }},
            resolve(parent, args) {
                if(args.value) {
                    mqtt.sendMessage(1, 'longitude', args.value);
                    return args.value;
                }
                return parent.longitude;
            }
        },
    })
});