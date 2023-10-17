import styles from '../globals.scss';

export default function Footer() {
  return (
    <footer>
      <ul>
        <li className={styles.footerLinks}>Privacy Policy</li>
        <li className={styles.footerLinks}>Terms & Conditions</li>
        <li className={styles.footerLinks}>Cookies Policy</li>
        <li className={styles.footerLinks}>Imprint</li>
      </ul>
    </footer>
  );
}
