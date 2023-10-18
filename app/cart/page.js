import Image from 'next/image';
import Link from 'next/link';
// import { useRouter } from 'next/router';
import { getProducts } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import styles from './page.module.scss';
import RemoveButton from './RemoveButton';

export const metadata = {
  title: 'Cart',
  description:
    'You are a few clicks away from a calm, energized lifestyle provided by premium matcha.',
};

export default async function CartPage() {
  const products = await getProducts();

  // cookies
  const productsCookie = getCookie('cart');

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

  //   return (
  //     <div className="cartPage">
  //       {productsWithQuantity.length > 0 ? (
  //         // If there are products with quantity, map and display them
  //         <div>
  //           <h1>My cart</h1>
  //           {productsWithQuantity.map((product) => (
  //             <div
  //               data-test-id={`cart-product-${product.id}`}
  //               key={`product-div-${product.id}`}
  //             >
  //               <Link href={`/products/${product.id}`}>
  //                 <li>{product.type}</li>
  //                 <br />
  //                 <Image
  //                   src={`/images/${product.type}.png`}
  //                   alt={product.type}
  //                   width={100}
  //                   height={100}
  //                 />
  //               </Link>
  //               <br />
  //               Quantity:
  //               <div data-test-id={`cart-product-quantity-${product.id}`}>
  //                 {product.quantity}
  //               </div>
  //               <br />
  //               Price: {product.price}€
  //               <br />
  //               <br />
  //               Subtotal: {product.quantity * product.price}€
  //               <br />
  //               <RemoveButton productId={product.id} />
  //               <br />
  //               <br />
  //               <br />
  //               <br />
  //             </div>
  //           ))}
  //           <div data-test-id="cart-total">Total quantity: {totalQuantity}</div>
  //           <div>Total sum (incl. tax): {totalSum}€</div>

  //           <br />
  //           <br />
  //           <div className={styles.buttonContainer}>
  //             <Link href="/products">
  //               <div>
  //                 <button className={styles.continueShoppingButton}>
  //                   Continue shopping
  //                 </button>
  //               </div>
  //             </Link>
  //             <br />
  //             <Link href="/checkout">
  //               <div>
  //                 <button
  //                   className={styles.checkoutButton}
  //                   data-test-id="cart-checkout"
  //                 >
  //                   Checkout
  //                 </button>
  //               </div>
  //             </Link>
  //           </div>
  //         </div>
  //       ) : (
  //         <h1>No items in cart.</h1>
  //       )}
  //     </div>
  //   );
  // }

  return (
    <div className={styles.cartPage}>
      {productsWithQuantity.length > 0 ? (
        <div>
          <h1>My cart</h1>
          <div className={styles.productList}>
            {productsWithQuantity.map((product) => (
              <div
                data-test-id={`cart-product-${product.id}`}
                key={`product-div-${product.id}`}
                className={styles.productItem}
              >
                <div className={styles.productType}>{product.type}</div>
                <div className={styles.productDetails}>
                  <div className={styles.productColumn}>
                    <Link href={`/products/${product.id}`}>
                      <Image
                        src={`/images/${product.type}.png`}
                        alt={product.type}
                        width={100}
                        height={100}
                      />
                    </Link>
                  </div>
                  <div className={styles.productColumn}>
                    <div>Price: {product.price}€</div>
                  </div>
                  <div className={styles.productColumn}>
                    <div data-test-id={`cart-product-quantity-${product.id}`}>
                      Quantity: {product.quantity}
                    </div>
                  </div>
                  <div className={styles.productColumn}>
                    <div>Subtotal: {product.price * product.quantity}€</div>
                  </div>
                  <div
                    data-test-id={`cart-product-remove-${product.id}`}
                    className={styles.productColumn}
                  >
                    <RemoveButton productId={product.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.totalsRow}>
            <div className={styles.totalColumn}>
              Total quantity: {totalQuantity}
            </div>

            <div data-test-id="cart-total" className={styles.totalColumn}>
              Total sum (incl. tax): {totalSum}€
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <Link href="/products">
              <div>
                {' '}
                <button className={styles.continueShoppingButton}>
                  Continue shopping
                </button>
              </div>
            </Link>
            <Link href="/checkout">
              <div>
                <button
                  className={styles.checkoutButton}
                  data-test-id="cart-checkout"
                >
                  Checkout
                </button>
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <h1>No items in cart.</h1>
      )}
    </div>
  );
}
