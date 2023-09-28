import Image from 'next/image';
import Link from 'next/link';
import matchapowder from '../public/images/matchapowder.jpg';

export default function Home() {
  return (
    <main>
      <h1>Company name - Welcome message / slogan</h1>
      <Image src={matchapowder} alt="matcha powder" />
      <p>General information</p>
      <Link href="/products">Products</Link>
      <br />
      <div>Sign up input field</div>
    </main>
  );
}
