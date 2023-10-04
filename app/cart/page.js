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

  // display of all products with the number of saved quantities in the cart, even if no quantity the product will be shown
  const allProductsInCart = products.map((product) => {
    const matchingWithProductFromCookie = productsInput.find(
      (productObject) => product.id === productObject.id,
    );

    return { ...product, quantity: matchingWithProductFromCookie?.quantity };
  });

  // displays only the products with quantities & if no products with quantities, then display 'no items in cart'
  const productsWithQuantity = allProductsInCart.filter(
    (product) => product.quantity !== undefined,
  );

  // try to add a variable updatedCart & if function returning old+newcookie quantity or old quantity
  if (!productsWithQuantity.id) => {
    return [...productsWithQuantity, quantity: matchingWithProductFromCookie?.quantity];
  }
  ///

  return (
    <div>
      {productsWithQuantity.length > 0 ? (
        // If there are products with quantity, map and display them

        productsWithQuantity.map((product) => (
          <div key={`product-div-${product.id}`}>
            <Link href={`/products/${product.id}`}>{product.type}</Link>
            <br />
            <Image
              src={`/images/${product.type}.png`}
              alt={product.type}
              width={100}
              height={100}
            />
            <br />
            Quantity:{product.quantity}
            <br />
            Price: {product.price}
            <br />
            <br />
            Subtotal:
            <br />
            <button>Remove</button>
            <br />
            <br />
            <br />
            <br />
          </div>
        ))
      ) : (
        // If there are no products with quantity, display the message
        <h1>No items in cart.</h1>
      )}
    </div>
  );
}
