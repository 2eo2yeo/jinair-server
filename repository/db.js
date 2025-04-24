import mysql from 'mysql2';

const pool = mysql.createPool({
    host: 'jinair-db22.cjw8casuq6rz.ap-northeast-2.rds.amazonaws.com', 
    port: 3306,
    user: 'admin',
    password: 'jinairadmin1234',
    database: 'jinairdb',
});

const getConnection = () => pool.promise().getConnection();

export { getConnection };

export const db = pool.promise();
