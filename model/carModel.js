import { queryMany, queryOne } from "../services/database.js"
export default class {

    static async getCarsForUser(userId) 
    {    
        let sql = `select * from cars where user_id like "${userId}";`;
        let cars;
        try {
            cars = await queryMany(sql);
        }
        catch (error) {
            throw new Error("Invalid token!")
        }

        if(cars == null) {
            throw new Error("No cars found for user!");
        }
        return cars;
    }

    static async findById(id, token) {
        let sql = `select * from cars inner join users on cars.user_id = users.id where cars.id = ${id} and users.bearer_token like "${token}";`;
        
        let car;
        try {
            car = await queryOne(sql);
        }
        catch (error) {
            throw new Error("Invalid token!")
        }

        return await queryOne(sql);
    }
}
