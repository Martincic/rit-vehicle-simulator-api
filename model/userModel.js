import database from "../services/database.js";
const db = database;
export default class {

    static loginUser(email, password) {
        let user = database.query("SELECT * FROM users WHERE email =" + db.escape(email));
        console.log(user);
        return {email: email, password: password};
    }
}