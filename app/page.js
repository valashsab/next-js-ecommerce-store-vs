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
      <section className="generalInfo">
        <p>PLACEHOLDER: General information</p>
      </section>
      <section className="productsLink">
        {' '}
        <Link href="/products">Products</Link>
      </section>
      <br />
      <section className="signUp">
        <div>Sign up input field</div>
      </section>
      <br />
      <br />
      <CookieBanner />
    </main>
  );
}
