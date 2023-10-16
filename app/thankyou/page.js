import Link from 'next/link';
import styles from './page.module.scss';

export const metadata = {
  title: 'Thank you',
  description: 'Thank you for your visit & purchase. Come back soon!',
};

export default function ThankyouPage() {
  return (
    <main>
      <div>
        <h1>Thank you for your order!</h1>

        <p>Your order will be delivered within 2-3 working days.</p>
        <br />

        <span>
          <Link href="/">
            <div>
              <button className={styles.homeButton}>Back to home</button>
            </div>{' '}
          </Link>
        </span>
      </div>
    </main>
  );
}
