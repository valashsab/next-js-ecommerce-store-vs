import { Sql } from 'postgres';

const products = [
  {
    id: 1,
    type: 'izumi',
    weight: '30g',
    price: 22,
    currency: 'Euro',
    slug: 'Matcha Izumi',
  },
  {
    id: 2,
    type: 'akashi',
    weight: '30g',
    price: 32,
    currency: 'Euro',
    slug: 'Matcha Akashi',
  },

  {
    id: 3,
    type: 'horai',
    weight: '30g',
    price: 42,
    currency: 'Euro',
    slug: 'Matcha Horai',
  },
  {
    id: 4,
    type: 'tsuki',
    weight: '50g',
    price: 13,
    currency: 'Euro',
    slug: 'Matcha Tsuki',
  },
];

export async function up(sql: Sql) {
  for (const product of products) {
    await sql`
      INSERT INTO products
        (type, weight, price, currency, slug)
      VALUES
        (${product.type}, ${product.weight}, ${product.price}, ${product.currency}, ${product.slug})

    `;
  }
}

export async function down(sql: Sql) {
  for (const product of products) {
    await sql`
      DELETE FROM products WHERE id = ${product.id}
  `;
  }
}
