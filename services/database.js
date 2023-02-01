import dotenv from 'dotenv'
import mysql from 'mysql'
dotenv.config({ path: ".env.dev" })

export const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_DB
});
