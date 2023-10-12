import Image from 'next/image';
import Link from 'next/link';
// import { useRouter } from 'next/router';
import { getProducts } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import RemoveButton from './RemoveButton';

export default async function CartPage() {
  const products = await getProducts();

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

  // Calculate the total quantity
  const totalQuantity = productsWithQuantity.reduce((total, product) => {
    return total + (product.quantity || 0);
  }, 0);

  // Calculate the total by summing up all the subtotals
  const totalSum = productsWithQuantity.reduce((accumulator, product) => {
    return accumulator + product.quantity * product.price;
  }, 0);

  return (
    <div>
      {productsWithQuantity.length > 0 ? (
        // If there are products with quantity, map and display them
        <div>
          <h1>My cart</h1>
          {productsWithQuantity.map((product) => (
            <div
              data-test-id={`cart-product-${product.id}`}
              key={`product-div-${product.id}`}
            >
              <Link href={`/products/${product.id}`}>
                <li>{product.type}</li>
                <br />
                <Image
                  src={`/images/${product.type}.png`}
                  alt={product.type}
                  width={100}
                  height={100}
                />
              </Link>
              <br />
              Quantity:
              <div data-test-id={`cart-product-quantity-${product.id}`}>
                {product.quantity}
              </div>
              <br />
              Price: {product.price}
              <br />
              <br />
              Subtotal: {product.quantity * product.price}
              <br />
              <RemoveButton productId={product.id} />
              <br />
              <br />
              <br />
              <br />
            </div>
          ))}
          <div>Total sum (incl. tax): {totalSum}</div>
          <div data-test-id="cart-total">Total quantity: {totalQuantity}</div>
          <br />
          <br />
          <Link data-test-id="cart-checkout" href="/checkout">
            <div>
              <button>Checkout</button>
            </div>
          </Link>
          <br />
          <Link href="/products">
            <div>
              <button>Continue shopping</button>
            </div>
          </Link>
        </div>
      ) : (
        <h1>No items in cart.</h1>
      )}
    </div>
  );
}
