import './globals.scss';
import { Inconsolata } from 'next/font/google';
import Link from 'next/link';
import { getProducts } from '../database/products';
import { getCookie } from '../util/cookies';
import { parseJson } from '../util/json';

const inconsolata = Inconsolata({
  weight: ['200', '400', '600'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Welcome to xyz Matcha e-commerce store',
    template: '%s Premium Matcha online',
  },
  description: 'Premium matcha available for purchase in our e-commerce store.',
};

export default async function RootLayout({ children }) {
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

  return (
    <html lang="en">
      <body className={inconsolata.className}>
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
                <div>{productsWithQuantity.quantity}</div>
              </Link>
            </li>
          </ul>
        </nav>
        {children}
        <footer className="footer">
          <ul className="footerList">
            <li>
              <Link className="footerLinks" href="/privacypolicy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="footerLinks" href="/termsandconditions">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link className="footerLinks" href="/cookiespolicy">
                Cookies Policy
              </Link>
            </li>
            <li>
              <Link className="footerLinks" href="/imprint">
                Imprint
              </Link>
            </li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
