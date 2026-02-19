import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "authdb",
  password: "password",
  port: 5432,
});

pool.connect()
  .then(() => console.log("Database connected"))
  .catch(err => console.error("DB connection error", err));

export default pool;
