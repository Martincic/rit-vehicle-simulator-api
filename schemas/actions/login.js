import { GraphQLString } from "graphql"
import { UserType } from "../../schemas/objects/user.js"
import { connection } from "../../services/database.js"

let stuff_i_want = null;

export const loginField = {
    type: UserType,
    args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    async resolve(parent, args) {
        return new Promise((resolve, reject) => {
          connection.query('SELECT * FROM `users` WHERE `id` = "1"', function (_error, results) {
            if (_error) {
              reject(_error);
            }
            resolve(results[0]);
          });
        });
      }
    }
    // resolve(parent, args) {
    //     // Graph to trigger this function: 
    //     // query{
    //     //  loginDrek(email:"bla@bla.com", name: "teehe", password: "test"){
    //     //     email, name
    //     //  }
    //     // }
    
    //     // This connection.query() function is asynchronus and wont give me results back
    //     // How the hell do we get results to this 'i_want_results' variable???
    //     // let i_want_results;

    //     // This returns undefined
    //     return connection.query('SELECT * FROM `users` WHERE `id` = "1"', function (_error, results) {
                    
    //         // The results do land here
    //         console.log("Results:", results);

    //         // This return does not work
    //         return results;
    //     });
    // }
      
        // return i_want_results


        // let user = get_info(null, resolve(parent, args) {
        //     return result
        // });

        // console.log("FINAL:", stuff_i_want)
//         let users = getUsers().then(() => {
//             return users;
//         });

//         console.log("users: ",users);
//         return users;
//     }
// };

let getUsers = () => {
    return new Promise(function(resolve, reject){
      connection.query(
          "SELECT * FROM users", 
          function(err, rows){                                                
              if(rows === undefined){
                  reject(new Error("Error rows is undefined"));
              }else{
                  resolve(rows);
              }
          }
      )}
  )}


