// import dotenv from 'dotenv';
import postgres from 'postgres';
import { setEnvironmentVariables } from './util/config.mjs';

setEnvironmentVariables();
// dotenv.config();

const sql = postgres();

console.log(
  await sql`
      SELECT * FROM goodies;
  `,
);

// Database connection needs to be open - example code how to end:
// await sql.end();
