import './globals.scss';
import { Inconsolata } from 'next/font/google';
import Footer from '../Footer';
import Header from '../Header';

const inconsolata = Inconsolata({
  weight: ['200', '400', '600'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Welcome to Matcha e-commerce store',
    template: '%s Premium Matcha online',
  },
  description: 'Premium matcha available for purchase online',
};

// export default function RootLayout({ children }) {
export default function RootLayout(props) {
  return (
    <html lang="en">
      <body className={inconsolata.className}>
        {/* <nav> */}
        <Header />
        {/* <ul>
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
                About us{' '}
              </Link>
            </li>
            <li className="navCart">
              <Link className="headerLinks" href="/cart">
                Cart
              </Link>
            </li>

          </ul> */}
        {/* </nav> */}
        {/* {children} */}
        {props.children}
        <Footer />
      </body>
    </html>
  );
}
