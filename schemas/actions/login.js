import { GraphQLString } from "graphql"
import { UserType } from "../../schemas/objects/user.js"
import { connection } from "../../services/database.js"

export const loginField = {
    type: UserType,
    args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    resolve(parent, args) {
        // Graph to trigger this function: 
        // query{
        //  loginDrek(email:"bla@bla.com", name: "teehe", password: "test"){
        //     email, name
        //  }
        // }
    
        // This return works!
        // return {name: "test", email: args.email, password: "dada"};

        // This connection.connect() function is asynchronus and wont give me results back
        // How the hell do we get results to this 'i_want_results' variable???
        let i_want_results;

        i_want_results = connection.connect(async function (error) {
            if (!error) {
                console.log('Connected!');
                return connection.query('SELECT * FROM `users` WHERE `id` = "1"', function (_error, results) {
                    
                    // The results do land here
                    console.log(results[0]);

                    // This return does not work
                    return { name: "test", email: "teehe", password: "dada" };

                    // I WANT TO RETURN THESE RESULTS BACK
                    // return results[0];
                });
            }
        });
      
        return i_want_results
    }
};