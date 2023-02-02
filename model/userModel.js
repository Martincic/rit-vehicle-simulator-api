import { connection, queryOne } from "../services/database.js"
import argon2i from "argon2";
export default class {

    /*  
        Login the user, create bearer token and persist the token
    */
    static async loginUser(email, password) 
    {    
        let sql = `select * from users where email like ${email} AND password like ${password}`;// and password like ${password};`;
        let user = await queryOne(sql);

        if(user == null) {
            throw new Error("Invalid credentials!");
        }
        // user.bearer_token = this.generateToken(user);
        console.log(user);
        return user;
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