import dotenv from 'dotenv'
import mysql from 'mysql'
dotenv.config({ path: ".env.dev" })

export const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_DB
});

export function queryMany(sql) {
    return new Promise((resolve, reject) => {
        connection.query( sql , function (_error, results) {
          if (_error) {
            console.log(_error);
            reject(_error);
          }
          resolve(results);
        });
      });
}

export function queryOne(sql) {
    return new Promise((resolve, reject) => {
        connection.query( sql , function (_error, results) {
          if (_error) {
            console.log(_error);
            reject(_error);
          }
          resolve(results[0]);
        });
      });
}
