import Link from 'next/link';
import { getCookie } from './util/cookies';
import { parseJson } from './util/json';

export default function Header() {
  let cartQuantity = 0;

  const productsCookie = getCookie('cart');

  const productsInput = !productsCookie ? [] : parseJson(productsCookie) || [];

  productsInput.forEach((item) => {
    cartQuantity += item.quantity;
  });

  console.log(cartQuantity);

  return (
    <nav>
      <ul>
        <li className="navHome">
          <Link className="headerLinks" href="/">
            Home
          </Link>
        </li>
        <li className="navProductsAbout">
          <Link className="headerLinks" href="/products">
            Products
          </Link>
        </li>
        <li>
          <Link className="headerLinks" href="/about">
            About us
          </Link>
        </li>
        <li className="navCart">
          <Link className="headerLinks" href="/cart">
            Cart
          </Link>
        </li>
        <li>{cartQuantity}</li>
      </ul>
    </nav>
  );
}
