import { Sql } from 'postgres';

const goodies = [
  {
    id: 1,
    goodyName: 'Sasaki and Miyano',
    type: 'Merch and Manga',
    price: 20,
    description: 'SNS card & mangas included',
  },
  {
    id: 2,
    goodyName: 'Therapy Game',
    type: 'Merch and Manga',
    price: 15,
    description: 'Acrylic stand, postcard & mangas included',
  },
  {
    id: 3,
    goodyName: 'Given',
    type: 'Manga',
    price: 10,
    description: 'Five volumes included',
  },
  {
    id: 4,
    goodyName: 'Yamada Nonono',
    type: 'Manga',
    price: 4,
    description: 'This goody has only one volume',
  },
  {
    id: 5,
    goodyName: 'Little Mushroom',
    type: 'Novel',
    price: 10,
    description: 'Two volumes included',
  },
];

export async function up(sql: Sql) {
  for (const goody of goodies) {
    await sql`
    INSERT INTO goodies
      (goody_name, type, price, description)
    VALUES
      (${goody.goodyName}, ${goody.type}, ${goody.price}, ${goody.description})
  `;
  }
}

export async function down(sql: Sql) {
  for (const goody of goodies) {
    await sql`
    DELETE FROM goodies WHERE id = ${goody.id}
  `;
  }
}
