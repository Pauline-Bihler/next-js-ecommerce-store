import { Sql } from 'postgres';

export type Goody = {
  id: number;
  goodyName: string;
  type: string;
  price: number;
  description: string | null;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE goodies (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      goody_name varchar(50) NOT NULL,
      type varchar(50) NOT NULL,
      price decimal (8,2) NOT NULL,
      description varchar(100)
    );
  `;
}

export async function down(sql: Sql) {
  await sql`
    DROP TABLE goodies
  `;
}
