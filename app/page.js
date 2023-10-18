import './globals.scss';
import Image from 'next/image';
import Link from 'next/link';
import CookieBanner from '../CookieBanner';
import matchapowder from '../public/images/matchapowder.jpg';
import styles from './page.module.scss';

export const metadata = {
  title: 'Welcome to Matcha',
  description: 'Matcha = Healthy green energy.',
};

export default function HomePage() {
  return (
    <main>
      <h1>MATCHA</h1>
      <div className="mainImg">
        <Image
          className={styles.pictureMainpage}
          src={matchapowder}
          alt="matcha powder"
          width={500}
        />
      </div>

      <section className="productsLink">
        <br />
        <br />
        <div className={styles.introProducts}>
          To get a taste of matcha, click the link below:{' '}
        </div>
        <br />
        <Link className={styles.productsLink} href="/products">
          Products
        </Link>
      </section>
      <br />
      <br />
      <br />
      <CookieBanner />
    </main>
  );
}
