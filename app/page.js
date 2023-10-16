import './globals.scss';
import Image from 'next/image';
import Link from 'next/link';
import CookieBanner from '../CookieBanner';
import matchapowder from '../public/images/matchapowder.jpg';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main>
      <h1>MATCHA</h1>
      <div className="mainImg">
        <Image
          classname={styles.pictureMainpage}
          src={matchapowder}
          alt="matcha powder"
          width={500}
        />
      </div>

      <section className="productsLink">
        <div>To get a taste of matcha, click the link below: </div>
        <Link href="/products">Products</Link>
      </section>
      <br />
      <br />
      <br />
      <CookieBanner />
    </main>
  );
}
