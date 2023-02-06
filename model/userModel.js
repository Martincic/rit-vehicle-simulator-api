import { connection, queryOne } from "../services/database.js"
import argon2i from "argon2";
export default class {

    /*  
        Login the user, create bearer token and persist the token
    */
    static async loginUser(email, password) 
    {    
        let sql = `select * from users where email like "${email}";`;
        let user = await queryOne(sql);

        let match;
        try {
            match = await argon2i.verify(user.password, password);
        } catch (err) {
            console.log(err);
        }

        if(user == null || match == false) {
            throw new Error("Invalid credentials!");
        }
        user.bearer_token = this.generateToken(user);

        return user;
    }

    static async registerUser(name, email, password) 
    {    
        let hash;
        let token;
        try {
            hash = await argon2i.hash(password);
            const token_hash = await argon2i.hash(password + email + Date.now().toString());
            token = token_hash.split("=")[4];

        } catch (err) {
            console.log(err);
        }
        let sql = `INSERT INTO users(full_name, email, password, bearer_token) VALUES ("${name}", "${email}", "${hash}", "${token}");`;
        
        // Create the user in database
        await queryOne(sql);

        let user = await this.findBearer(token);
        console.log("USER:",user);
        return user;
    }

    /*  
        Create bearer token based on user's unique attributes + timestamp
        Update the user in database with new token, return only
    */
    static async generateToken(user) 
    {
        console.log("GENERATING!");

        try {
            const hash = await argon2i.hash(user.password + user.email + Date.now().toString());
            let token = hash.split("=")[4];
            let sql = `UPDATE users SET bearer_token = '${token}' WHERE id=${user.id};`;
            queryOne(sql);
            return token;
        } catch (err) {
            console.log(err);
        }
        return null;
    }

    static async findBearer(token) {
        let sql = `select * from users where bearer_token like "${token}";`;
        
        return await queryOne(sql); 
    }

    static async findById(id) {
        let sql = `select * from users where id like "${id}";`;
        
        return await queryOne(sql);
    }
}