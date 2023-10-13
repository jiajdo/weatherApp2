import pkg from 'pg';
const { Pool } = pkg;
const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_SSL !== 'false' && {
    rejectUnauthorized: false,
  },
});
export default db;
