import './globals.scss';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>
        <div>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/about">About us</Link>
            <Link href="/cart">Cart</Link>
          </nav>
        </div>

        {children}
        <div>
          <footer>
            <Link href="/privacypolicy">Privacy Policy</Link>
            <Link href="/termsandconditions">Terms & Conditions</Link>
            <Link href="/cookiespolicy">Cookies Policy</Link>
            <Link href="/imprint">Imprint</Link>
          </footer>
        </div>
      </body>
    </html>
  );
}
