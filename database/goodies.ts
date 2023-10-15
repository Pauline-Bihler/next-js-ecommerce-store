import 'server-only';
import { cache } from 'react';
import { sql } from '../database/connect';
import { Goody } from '../migrations/00000-createTableGoodies';

// Reference Array - do not uncomment
// const goodies1 = [
//   { id: 1, goodyName: 'Sasaki and Miyano', type: 'Merch and Manga', price: 20 },
//   { id: 2, goodyName: 'Therapy Game', type: 'Merch and Manga', price: 15 },
//   { id: 3, goodyName: 'Given', type: 'Manga', price: 10 },
//   { id: 4, goodyName: 'Yamada Nonono', type: 'Manga', price: 4 },
//   { id: 5, goodyName: 'Little Mushroom', type: 'Novel', price: 10 },
// ];

// type Goody = {
//   id: number;
//   goodyName: string;
//   type: string;
//   price: number;
//   description: string | null;
// };

export const getGoodies = cache(async () => {
  // return goodies;
  const goodies = await sql<Goody[]>`
  SELECT * FROM goodies
  `;
  return goodies;
});

export const getGoodyById = cache(async (id: number) => {
  // return goodies;
  // Postgres always returns an array
  const goody = await sql<Goody[]>`
  SELECT
    *
  from
    goodies
  WHERE
    id = ${id}
    `;
  return goody[0];
});

// do not uncomment this
// This function is written better in animals.ts file

// export default function getGoodies() {
//   // return goodies;
//   const goodies = sql`
//   SELECT * FROM goodies
//   `;
//   return goodies;
// }

// export function getGoody(id: number) {
//   return goodies1.find((goody) => goody.id === id);
// }
