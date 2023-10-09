const products = [
  {
    id: 1,
    type: 'izumi',
    weight: '30g',
    price: 22,
    currency: '€',
    slug: 'Matcha Izumi',
  },
  {
    id: 2,
    type: 'akashi',
    weight: '30g',
    price: 32,
    currency: '€',
    slug: 'Matcha Akashi',
  },

  {
    id: 3,
    type: 'horai',
    weight: '30g',
    price: 42,
    currency: '€',
    slug: 'Matcha Horai',
  },
  {
    id: 4,
    type: 'tsuki',
    weight: '50g',
    price: 13,
    currency: '€',
    slug: 'Matcha Tsuki',
  },
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((product) => product.id === id);
}
