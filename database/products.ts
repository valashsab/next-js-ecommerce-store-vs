import 'server-only';
import { cache } from 'react';
import { sql } from '../database/connect';

// const products1 = [
//   {
//     id: 1,
//     type: 'izumi',
//     weight: '30g',
//     price: 22,
//     currency: 'Euro',
//     slug: 'Matcha Izumi',
//   },
//   {
//     id: 2,
//     type: 'akashi',
//     weight: '30g',
//     price: 32,
//     currency: 'Euro',
//     slug: 'Matcha Akashi',
//   },

//   {
//     id: 3,
//     type: 'horai',
//     weight: '30g',
//     price: 42,
//     currency: 'Euro',
//     slug: 'Matcha Horai',
//   },
//   {
//     id: 4,
//     type: 'tsuki',
//     weight: '50g',
//     price: 13,
//     currency: 'Euro',
//     slug: 'Matcha Tsuki',
//   },
// ];

type Product = {
  id: number;
  type: string;
  weight: string;
  price: number;
  currency: string;
  slug: string | null;
};
export const getProducts = cache(async () => {
  // return products;
  const products = await sql<Product[]>`
  SELECT * FROM products
  `;

  return products;
});

export const getProductById = cache(async (id: number) => {
  // return products;
  const [product] = await sql<Product[]>`
  SELECT
  *
  FROM
  products
  WHERE
  id = ${id}
  `;
  return product;
});

// export function getProductById(id: number) {
//   return products1.find((product) => product.id === id);
// }
