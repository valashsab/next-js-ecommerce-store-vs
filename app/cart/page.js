import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

// import quantity from '../products/[productId]/AddToCartForm';

export default function CartPage() {
  const products = getProducts();

  // cookies
  const productsCookie = getCookie('products');

  const productsInput = !productsCookie ? [] : parseJson(productsCookie);

  // this display all products with the number of saved quantities in the cart, even if no quantity the product will be shown
  const allProductsInCart = products.map((product) => {
    const matchingWithProductFromCookie = productsInput.find(
      (productObject) => product.id === productObject.id,
    );

    return { ...product, quantity: matchingWithProductFromCookie?.quantity };
  });

  const productsWithQuantity = allProductsInCart.filter(
    (product) => product.quantity > 0,
  );

  return (
    <div>
      {/* before maping over the array of objects, filter to find the products with quantity */}
      {productsWithQuantity.map((product) => {
        return (
          <div key={`product-div-${product.id}`}>
            <Link href={`/products/${product.id}`}>{product.type}</Link>
            <Image
              src={`/images/${product.type}.png`}
              alt={product.type}
              width={200}
              height={200}
            />
            {product.quantity}
          </div>
        );
      })}
    </div>
  );
}
