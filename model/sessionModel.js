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

    static async createSession(userId) {
        let sql = `INSERT INTO sessions(user_id, latitude, longitude, session_id) SELECT ${userId},0.0,0.0, MAX(session_id)+1 FROM sessions;`
        try{
            await queryOne(sql)
        }
        catch(err) { return false; }

        sql = `select max(session_id) as new from sessions;`
        let data;
        try{
            data = await queryOne(sql)
        }
        catch(err) { return false; }

        return data.new;
    }

    static async deleteSession(id) {
        let sql = `DELETE FROM sessions WHERE session_id = ${id};`;
        
        try{
            await queryOne(sql)
        }
        catch(err) { return false; }

        return true;
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

    static async addEntry(sessionId, userID, input) 
    {    
        console.log(input);
        let hvac;
        if(input.hvac == true) hvac = 1;
        else if(input.hvac == false) hvac = 0;
        else hvac = undefined; 

        let sql = `INSERT INTO sessions (session_id, user_id, speed, hvac, stateOfCharge, latitude, longitude)
            VALUES (
                ${sessionId},
                ${userID},
                NULLIF('${input.speed}', 'undefined'),
                NULLIF('${hvac}', 'undefined'), 
                NULLIF('${input.stateOfCharge}', 'undefined'), 
                IFNULL(NULLIF('${input.latitude}', 'undefined'), "0.0"),
                IFNULL(NULLIF('${input.longitude}', 'undefined'), "0.0")
            );`;

        let car;
        try {
            await queryOne(sql);
        }
        catch (error) {
            console.log(error)
            return false;
        }

        return true;
    }

}
