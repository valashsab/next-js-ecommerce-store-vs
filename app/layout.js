import './globals.scss';
import { Inconsolata } from 'next/font/google';
// import { useRouter } from 'next/router';
// import Header from '../Header';
// import totalQuantity from '../totalQuantity';
// import { useRouter } from 'next/navigation';
// import { totalQuantity } from './cart/page';
import Link from 'next/link';

// import { useRouter } from 'next/navigation';
// import Header from '../Header';

// import totalQuantity from './cart/page';

// import { getProducts } from '../database/products';
// import { getCookie } from '../util/cookies';
// import { parseJson } from '../util/json';

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
  // const router = useRouter();

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
                About us{' '}
              </Link>
            </li>
            <li className="navCart">
              <Link className="headerLinks" href="/cart">
                Cart{' '}
              </Link>
            </li>
            {/* //         {totalQuantity} */}
          </ul>
        </nav>
        {/* <Header totalQuantity={totalQuantity} /> */}
        {/* <Header totalQuantity={totalQuantity} router={router} /> */}
        {/* <Header totalQuantity={totalQuantity} router={router} /> */}
        {/* <div>Total quantity: {totalQuantity}</div> */}
        {children}
      </body>
    </html>
  );
}
