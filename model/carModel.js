import { queryMany, queryOne } from "../services/database.js"
import mqttService from "../services/mqttService.js";

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

    static async createCar(input, userId) {
        let sql = `INSERT INTO cars(user_id, nickname, description) VALUES(${userId}, "${input.nickname}", "${input.description}");`
        
        try{
            await queryOne(sql)
        }
        catch(err) { return false; }

        return true;
    }

    static async deleteCar(id) {
        let sql = `DELETE FROM cars WHERE id = ${id};`;
        
        try{
            await queryOne(sql)
        }
        catch(err) { return false; }

        return true;
    }

    static async updateCar(id, input, mqtt) 
    {    
        let hvac;
        if(input.statistics.hvac) hvac = 1;
        else hvac = 0;

        let sql = `UPDATE cars SET 
            nickname = COALESCE(NULLIF('${input.nickname}', 'undefined'), nickname),
            description = COALESCE(NULLIF('${input.description}', 'undefined'), description),
            speed = COALESCE(NULLIF('${input.statistics.speed}', 'undefined'), speed),
            hvac = COALESCE(NULLIF('${hvac}', 'undefined'), hvac),
            stateOfCharge = COALESCE(NULLIF('${input.statistics.stateOfCharge}', 'undefined'), stateOfCharge),
            latitude = COALESCE(NULLIF('${input.statistics.latitude}', 'undefined'), latitude),
            longitude = COALESCE(NULLIF('${input.statistics.longitude}', 'undefined'), longitude)
            
            WHERE id = ${id};`;

        let car;
        try {
            await queryOne(sql);
            
            if(Object.prototype.hasOwnProperty.call(input, 'statistics')){
                console.log("I am publishing statistics to MQTT!");

                for (var prop in input.statistics) {
                    if (Object.prototype.hasOwnProperty.call(input.statistics, prop)) {
                        console.log("I am publishing statistics to MQTT!");

                        mqtt.broadcastUpdate(id, prop, input.statistics[prop]);
                    }
                }            
            }

            car = await queryOne(`select * from cars where id = ${id};`);
        }
        catch (error) {
            console.log(error)
            throw new Error("Car not found!")
        }

        return car;
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
        return car;
    }

    static turnToCar(object) {
        return {
            id: object.id,
            user: object.user_id,
            nickname: object.nickname,
            description: object.description,
            
        };
    }
}
