import './globals.scss';
import { Inconsolata } from 'next/font/google';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const inconsolata = Inconsolata({
  weight: ['200', '400', '600'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Welcome to Matcha e-commerce store',
    // template: '%s Premium Matcha online',
  },
  description: 'Premium matcha available for purchase online',
};

export default function RootLayout({ children }) {
  // export default function RootLayout(props) {
  return (
    <html lang="en">
      <body className={inconsolata.className}>
        {/* <nav> */}
        <Header />

        {children}
        {/* {props.children} */}
        <Footer />
      </body>
    </html>
  );
}
