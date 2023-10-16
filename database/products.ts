import 'server-only';
import { cache } from 'react';
import { sql } from '../database/connect';
import { Product } from '../migrations/00000-createTableProducts';

// const products1 = [
//   {
//     id: 1,
//     type: 'izumi',
//     weight: '30g',
//     price: 22,
//     currency: 'Euro',
//     slug: 'Matcha Izumi',
//     description: 'The perfect matcha for first-timers to indulge in the  enjoyment of matcha.',
//   },
//   {
//     id: 2,
//     type: 'akashi',
//     weight: '30g',
//     price: 32,
//     currency: 'Euro',
//     slug: 'Matcha Akashi',
//     description: 'The best-known Matcha variety with a rich aroma: mild, delicately bitter, gentle, sweet and pleasantly digestible.',
//   },

//   {
//     id: 3,
//     type: 'horai',
//     weight: '30g',
//     price: 42,
//     currency: 'Euro',
//     slug: 'Matcha Horai',
//     description: 'Premium quality with emerald green color, ideal for Matcha connoisseurs and those who want to become one. Only suitable for drinks or pure.',
//   },
//   {
//     id: 4,
//     type: 'tsuki',
//     weight: '50g',
//     price: 13,
//     currency: 'Euro',
//     slug: 'Matcha Tsuki',
/*     description: 'Matcha Tsuki is a special organic basic matcha blend for use in the kitchen. Rich green tea aroma and fresh green tea taste with a slight bitter note in the finish. The name Tsuki means "moon".

Due to its slightly bitter taste, it is particularly recommended in combination with stronger flavors.

Ideal for matcha mix drinks and matcha latte applications.',
   },
 ]; */

// type Product = {
//   id: number;
//   type: string;
//   weight: string;
//   price: number;
//   currency: string;
//   slug: string | null;
// };

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

// export const deleteProductById = cache(async (id: number) => {
//   const [product] = await sql<Product[]>`
//   DELETE
//   *
//   FROM
//   products
//   WHERE
//   id = ${id}
//   RETURNING *
//   `;
//   return product;
// });

// export function getProductById(id: number) {
//   return products1.find((product) => product.id === id);
// }
