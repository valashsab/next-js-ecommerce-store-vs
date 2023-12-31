import { getProducts } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import CheckoutForm from './CheckoutForm';
import styles from './page.module.scss';

export const metadata = {
  title: 'Checkout',
  description: 'Start your matcha journey now!',
};

export default async function CheckoutPage() {
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

  // Calculate the total by summing up all the subtotals
  const total = productsWithQuantity.reduce((accumulator, product) => {
    return accumulator + product.quantity * product.price;
  }, 0);

  return (
    <div>
      <h1>Order summary</h1>

      <div className={styles.checkoutTotalSum}>
        Total sum (incl. tax): {total}€
      </div>
      <br />
      <br />
      <h2 className={styles.h2Heading}>Shipping & payment details</h2>
      <br />
      <CheckoutForm />
    </div>
  );
}
