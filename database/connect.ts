// import { readFileSync } from 'node:fs';
// import dotenv from 'dotenv';
import 'server-only';
import { headers } from 'next/headers';
import postgres, { Sql } from 'postgres';
import { setEnvironmentVariables } from '../util/config.mjs';

setEnvironmentVariables();

// export function setEnvironmentVariables() {
// Replacement for unmaintained dotenv-safe package
// https://github.com/rolodato/dotenv-safe/issues/128#issuecomment-1383176751
//
// TODO: Remove this and switch to dotenv/safe if this proposal gets implemented:
// https://github.com/motdotla/dotenv/issues/709
//   dotenv.config();

//   const unconfiguredEnvVars = Object.keys(
//     dotenv.parse(readFileSync('./.env.example')),
//   ).filter((exampleKey) => !process.env[exampleKey]);

//   if (unconfiguredEnvVars.length > 0) {
//     throw new Error(
//       `.env.example environment ${
//         unconfiguredEnvVars.length > 1 ? 'variables' : 'variable'
//       } ${unconfiguredEnvVars.join(', ')} not configured in .env file`,
//     );
//   }
// }

// const sql = postgres({
//   transform: {
//     ...postgres.camel,
//     undefined: null,
//   },
// });

declare module globalThis {
  let postgresSqlClient: Sql;
}

// Connect only once to the database
// https://github.com/vercel/next.js/issues/7811#issuecomment-715259370
function connectOneTimeToDatabase() {
  if (!('postgresSqlClient' in globalThis)) {
    globalThis.postgresSqlClient = postgres({
      transform: {
        ...postgres.camel,
        undefined: null,
      },
    });
  }

  return ((
    ...sqlParameters: Parameters<typeof globalThis.postgresSqlClient>
  ) => {
    headers();
    return globalThis.postgresSqlClient(...sqlParameters);
  }) as typeof globalThis.postgresSqlClient;
}

// const sql = connectOneTimeToDatabase();
export const sql = connectOneTimeToDatabase();

export async function getAllGoodiesFromDatabase() {
  const goodies = await sql`
  SELECT * FROM goodies
  `;
  return goodies;
}
