import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

// import quantity from '../products/[productId]/AddToCartForm';

export default function ProductsPage() {
  const products = getProducts();

  // added 03.10.23 cookies
  const productsCookie = getCookie('products');

  const productsInput = !productsCookie ? [] : parseJson(productsCookie);

  // productsWithQuantity = products in cart
  const productsInCart = products.map((product) => {
    const matchingWithProductFromCookie = productsInput.find(
      (productObject) => product.id === productObject.id,
    );

    return { ...product, quantity: matchingWithProductFromCookie?.quantity };
  });

  return (
    <div>
      <h1>My cart</h1>
      <span className="listedProducts">

   {productsInCart.filter((product) => product.quantity)
                  .map((product) => (
            <div key={`product-div-${product.id}`}>
              <Link href={`/products/${product.id}`}>{product.type}</Link>
              <br />
              <Image
                src={`/images/${product.type}.png`}
                alt={product.type}
                width={60}
                height={60}
              />
              <br />
              {product.quantity}
              <br />
              {product.price}
              <br />
              {product.weight}
            </div>

        {/* {productsInCart.map((product) => {
          return (
            <div key={`product-div-${product.id}`}>
              <Link href={`/products/${product.id}`}>{product.type}</Link>
              <br />
              <Image
                src={`/images/${product.type}.png`}
                alt={product.type}
                width={60}
                height={60}
              />
              <br />
              {product.quantity}
              <br />
              {product.price}
              <br />
              {product.weight}
            </div> */}
          ));
          }
      </span>
    </div>
  );
}
