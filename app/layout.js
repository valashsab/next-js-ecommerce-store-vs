import './globals.scss';
import { Inconsolata } from 'next/font/google';
import Link from 'next/link';

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

export default function RootLayout({ children }) {
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
              </Link>
            </li>
          </ul>
        </nav>
        {children}
        <footer>
          <ul>
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
