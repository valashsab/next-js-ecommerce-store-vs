import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Company name - Welcome message / slogan</h1>
      <p>General information</p>
      <Link href="/matcha">Matcha</Link>
      <br />
      <Link href="/matchaset">Matcha Set</Link>
      <div>Sign up input field</div>
    </main>
  );
}
