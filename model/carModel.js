import { queryMany, queryOne } from "../services/database.js"
export default class {

    static async getCarsForUser(userId) 
    {    
        let sql = `select * from cars where user_id like "${userId}";`;
        let cars = await queryMany(sql);

        if(cars == null) {
            throw new Error("No cars found for user!");
        }
        return cars;
    }

    static async findById(id) {
        let sql = `select * from cars where id like "${id}";`;
        
        return await queryOne(sql);
    }
}