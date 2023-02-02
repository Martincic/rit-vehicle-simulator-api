import { connection, queryOne } from "../services/database.js"
import argon2i from "argon2";
export default class {

    /*  
        Login the user, create bearer token and persist the token
    */
    static async loginUser(email, password) 
    {    
        let sql = `select * from users where email like "${email}";`;// and password like ${password};`;
        console.log(sql);
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
        try {
            hash = await argon2i.hash(password);
        } catch (err) {
            console.log(err);
        }
        let sql = `INSERT INTO users(full_name, email, password) VALUES ("${name}", "${email}", "${hash}");`;
        
        // Create the user in database
        queryOne(sql);

        return {full_name: name, email: email, password: password};
    }

    /*  
        Create bearer token based on user's unique attributes + timestamp
        Update the user in database with new token, return only
    */
    static async generateToken(user) 
    {
        try {
            const hash = await argon2i.hash(user.password + user.email + Date.now().toString());
            let token = hash.split("=")[4];
            let sql = `UPDATE users SET login_token = '${token}' WHERE id=${user.id};`;
            queryOne(sql);
            return token;
        } catch (err) {
            console.log(err);
        }
        return null;
    }
}