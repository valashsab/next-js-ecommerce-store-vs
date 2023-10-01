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
        <div>
          <nav className="nav">
            <ul>
              <li className="navHome">
                <Link href="/">Home</Link>
              </li>
              <li className="navProductsAbout">
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/about">About us</Link>
              </li>
              <li className="navCart">
                <Link href="/cart">Cart</Link>
              </li>
            </ul>
          </nav>
        </div>
        {children}
        <div>
          <footer className="footer">
            <ul>
              <li>
                <Link href="/privacypolicy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/termsandconditions">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/cookiespolicy">Cookies Policy</Link>
              </li>
              <li>
                <Link href="/imprint">Imprint</Link>
              </li>
            </ul>
          </footer>
        </div>
      </body>
    </html>
  );
}
