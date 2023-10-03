import Link from 'next/link';

export default function ThankyouPage() {
  return (
    <main>
      <div>
        <h1>Thank you!</h1>
        <p>Your order is on it's way.</p>
        <span>
          <Link href="/"> Back to home</Link>
        </span>
      </div>
    </main>
  );
}
