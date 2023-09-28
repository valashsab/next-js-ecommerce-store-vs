const products = [
  {
    id: 1,
    type: 'izumi',
    weight: '30g',
    price: 22,
    slug: 'matchaizumi',
  },
  {
    id: 2,
    type: 'akashi',
    weight: '30g',
    price: 32,
    slug: 'matchaakashi',
  },

  {
    id: 3,
    type: 'horai',
    weight: '30g',
    price: 42,
    slug: 'matchahorai',
  },
  {
    id: 4,
    type: 'tsuki',
    weight: '50g',
    price: 13,
    slug: 'matchatsuki',
  },
];

export function getProducts() {
  return products;
}

export function getProduct(id) {
  return products.find((product) => product.id === id);
}
