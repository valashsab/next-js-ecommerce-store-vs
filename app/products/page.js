import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';

// import { getCookie } from '../../util/cookies';
// import { parseJson } from '../../util/json';

export const metadata = {
  title: 'Products page',
  description:
    'A diverse selection of matcha powder to create your drink & food mixed with matcha.',
};

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <h1>Matcha selection</h1>

      <span className="listedProducts">
        {products.map((product) => {
          return (
            <div key={`product-div-${product.id}`}>
              <Link
                data-test-id={`/product-${product.id}`}
                href={`/products/${product.id}`}
              >
                <div>{product.type}</div>
                <Image
                  src={`/images/${product.type}.png`}
                  alt={product.type}
                  width={200}
                  height={200}
                />
              </Link>
            </div>
          );
        })}
      </span>
    </div>
  );
}
