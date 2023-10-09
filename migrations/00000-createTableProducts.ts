import { Sql } from 'postgres';

export type Product = {
  id: number;
  type: string;
  weight: string;
  price: number;
  currency: string;
  slug: string | null;
};

export async function up(sql: Sql) {
  await sql`
  CREATE TABLE products (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    type varchar(30) NOT NULL,
    weight varchar(30) NOT NULL,
    price integer NOT NULL,
    currency varchar(30) NOT NULL,
    slug varchar(30)
  );
  `;
}

export async function down(sql: Sql) {
  await sql`
  DROP TABLE products
  `;
}
