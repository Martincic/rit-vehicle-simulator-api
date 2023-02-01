import { GraphQLObjectType, GraphQLString } from 'graphql';

export const mutationSchema = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    getCars: {
      type: GraphQLString,
      resolve(parent, args) {
        return "Testing"
      }
    }
  }
})