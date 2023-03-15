import { queryMany, queryOne } from "../services/database.js"

export default class {

    static async getSessionsForUser(userId) 
    {    
        let sql = `select distinct session_id from sessions where user_id like "${userId}";`;
        let sessions;
        try {
            sessions = await queryMany(sql);
        }
        catch (error) {
            throw new Error("Invalid token!")
        }
        if(sessions == null) {
            throw new Error("No sessions found for user!");
        }
        return sessions;
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

    static async updateCar(id, input, mqtt, skip) 
    {    
        let hvac;
        if(input.statistics.hvac == true) hvac = 1;
        else if(input.statistics.hvac == false) hvac = 0;
        else hvac = undefined; 

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

                        if(!skip) {
                            mqtt.broadcastUpdate(id, prop, input.statistics[prop]);
                        }
                    }
                }            
            }

            car = await queryOne(`select * from cars where id = ${id};`);
        }
        catch (error) {
            return error
        }

        return car;
    }

    static async findById(id, token) {
        let sql = `select * from sessions inner join users on sessions.user_id = users.id where sessions.session_id = ${id} and users.bearer_token like "${token}";`;
        let sessions;
        try {
            sessions = await queryMany(sql);
        }
        catch (error) {
            console.log(error)
            throw new Error("Invalid token!")
        }
        return sessions;
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
