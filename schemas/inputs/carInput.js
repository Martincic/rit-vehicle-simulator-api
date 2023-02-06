import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLInputObjectType } from 'graphql';
import { StatisticInputType } from './statsInput.js';

export const CarInputType = new GraphQLInputObjectType({
    name: "CarInput",
    fields: () => ({        
        nickname: { type: GraphQLString },
        description: { type: GraphQLString },
        statistics: { type: StatisticInputType }
    })
});