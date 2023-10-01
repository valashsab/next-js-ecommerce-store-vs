import './globals.scss';
import Image from 'next/image';
import Link from 'next/link';
import matchapowder from '../public/images/matchapowder.jpg';

export default function Home() {
  return (
    <main>
      <h1>MATCHA</h1>
      <div className="mainImg">
        <Image src={matchapowder} alt="matcha powder" />
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
        <div>PLACEHOLDER: Sign up input field</div>
      </section>
    </main>
  );
}
