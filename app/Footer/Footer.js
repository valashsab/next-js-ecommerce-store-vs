import Link from 'next/link';
import styles from '../globals.scss';

export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <Link className={styles.footerLinks} href="/privacypolicy">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link className={styles.footerLinks} href="/termsandconditions">
            Terms & Conditions
          </Link>
        </li>
        <li>
          <Link className={styles.footerLinks} href="/cookiespolicy">
            Cookies Policy
          </Link>
        </li>
        <li>
          <Link className={styles.footerLinks} href="/imprint">
            Imprint
          </Link>
        </li>
      </ul>
    </footer>
  );
}
