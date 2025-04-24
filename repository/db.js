import mysql from 'mysql2';

const pool = mysql.createPool({
    host: 'http://jinair-react22.s3-website.ap-northeast-2.amazonaws.com/', 
    port: 3306,
    user: 'root',
    password: 'jinairadmin1234',
    database: 'jinairdb',
});

const getConnection = () => pool.promise().getConnection();

export { getConnection };

export const db = pool.promise();
