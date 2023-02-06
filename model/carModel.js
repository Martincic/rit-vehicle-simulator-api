import { queryMany } from "../services/database.js"
export default class {

    /*  
        Login the user, create bearer token and persist the token
    */
    static async getCarsForUser(userId) 
    {    
        let sql = `select * from cars where user_id like "${userId}";`;
        let cars = await queryMany(sql);

        if(cars == null) {
            throw new Error("No cars found for user!");
        }
        return cars;
    }
}