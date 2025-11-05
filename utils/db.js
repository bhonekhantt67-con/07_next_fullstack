import mysql from 'mysql2';

export const mysqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: '6708219_dit205',
});