import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Company name - Welcome message / slogan</h1>
      <p>General information</p>
      <Link href="/products">Products</Link>
      <br />
      <div>Sign up input field</div>
    </main>
  );
}
