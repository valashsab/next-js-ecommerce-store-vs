import Link from 'next/link';

export default function ThankyouPage() {
  return (
    <main>
      <div>
        <h1>Thank you for your order!</h1>
        <p>Your order will delivered within 2-3 working days.</p>
        <span>
          <Link href="/"> Back to home</Link>
        </span>
      </div>
    </main>
  );
}
