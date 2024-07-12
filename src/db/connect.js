import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  host: "142.44.161.115",
  user: "1900Pac2Equ1",
  password: "1900Pac2Equ1#43",
  database: "1900Pac2Equ1",
});

export default connection;
