import Image from 'next/image';
import Link from 'next/link';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

// import styles from '../globals.scss';

export default function Header() {
  let cartQuantity = 0;

  const productsCookie = getCookie('cart');

  const productsInput = !productsCookie ? [] : parseJson(productsCookie) || [];

  productsInput.forEach((item) => {
    cartQuantity += item.quantity;
  });

  console.log(cartQuantity);

  return (
    <header>
      <nav>
        <ul>
          <li className="navHome">
            <Link className="headerLinks" href="/">
              Home
            </Link>
          </li>
          <li className="navProductsAbout">
            <Link
              data-test-id="products-link"
              className="headerLinks"
              href="/products"
            >
              Products
            </Link>
          </li>
          <li>
            <Link className="headerLinks" href="/about">
              About
            </Link>
          </li>
          <li className="navCart">
            <Link data-test-id="cart-link" href="/cart" className="headerLinks">
              <div>
                {/* <div className={styles.icon}> */}
                <Image
                  src="/images/shopping-cart.svg"
                  alt="shopping cart icon"
                  width={40}
                  height={40}
                />
              </div>
            </Link>
          </li>
          <li>
            <div data-test-id="cart-count">
              {/* <div className={styles.cartQuantity} data-test-id="cart-count"> */}
              {cartQuantity}
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
