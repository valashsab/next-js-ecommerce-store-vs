import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

// import RemoveButton from './RemoveButton';

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

  // Calculate the total by summing up all the subtotals
  const total = productsWithQuantity.reduce((accumulator, product) => {
    return accumulator + product.quantity * product.price;
  }, 0);

  return (
    <div>
      {' '}
      <div>
        {productsWithQuantity.length > 0 ? (
          // If there are products with quantity, map and display them
          <div data-test-id="cart-product-<product id>">
            <h1>My cart</h1>
            {productsWithQuantity.map((product) => (
              <div key={`product-div-${product.id}`}>
                <Link href={`/products/${product.id}`}>
                  {product.type}
                  <br />
                  <Image
                    src={`/images/${product.type}.png`}
                    alt={product.type}
                    width={100}
                    height={100}
                  />
                </Link>
                <br />
                Quantity: {product.quantity}
                <br />
                Price: {product.price}
                <br />
                <br />
                Subtotal: {product.quantity * product.price}
                <br />
                <button>Remove</button>
                <br />
                <br />
                <br />
                <br />
              </div>
            ))}
            <div>Total sum (incl. tax): {total}</div>
            <button>Checkout</button>
          </div>
        ) : (
          <h1>No items in cart TEST TEST TEST.</h1>
        )}
      </div>
    </div>
  );
}
