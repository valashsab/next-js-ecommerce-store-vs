import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';

// import { getCookie } from '../../util/cookies';
// import { parseJson } from '../../util/json';

export default function ProductsPage() {
  const products = getProducts();

  // // added 03.10.23 cookies
  // const productsCookie = getCookie('products');

  // const productsInput = !productsCookie ? [] : parseJson(productsCookie);

  // const productsWithQuantity = products.map((product) => {
  //   const matchingWithProductFromCookie = productsInput.find(
  //     (productObject) => product.id === productObject.id,
  //   );

  //   return { ...product, quantity: matchingWithProductFromCookie?.quantity };
  // });

  return (
    <div>
      <h1>Matcha selection & sets</h1>

      <span className="listedProducts">
        {products.map((product) => {
          return (
            <div key={`product-div-${product.id}`}>
              <Link href={`/products/${product.id}`}>
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
