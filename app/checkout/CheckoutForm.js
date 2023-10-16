'use client';
import { useRouter } from 'next/navigation';
// import { useState } from 'react';
import { deleteCookie } from './actions';
import styles from './CheckoutForm.module.scss';

export default function CheckOut() {
  const router = useRouter();
  // const [cart, setCart] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await deleteCookie('cart');
    await router.push(`/thankyou`);
  };

  return (
    <div>
      <main>
        <div>
          <form onSubmit={handleSubmit} action="/submit" autoComplete="off">
            <div className={styles.customerDetailsCheckout}>
              Contact details
            </div>
            <br />
            <label className={styles.label} htmlFor="firstName">
              First name
            </label>
            <input
              className={styles.input}
              data-test-id="checkout-first-name"
              id="firstName"
              name="firstName"
              required
            />
            <br />
            <label className={styles.label} htmlFor="lastName">
              Last name
            </label>
            <input
              className={styles.input}
              data-test-id="checkout-last-name"
              id="lastName"
              name="lastName"
              required
            />
            <br />
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              className={styles.input}
              data-test-id="checkout-email"
              type="email"
              id="email"
              name="email"
              required
            />
            <br />
            <br />
            <div className={styles.customerDetailsCheckout}>
              {' '}
              Shipping address
            </div>

            <br />
            <label className={styles.label} htmlFor="address">
              Address
            </label>
            <input
              className={styles.input}
              data-test-id="checkout-address"
              id="address"
              name="address"
              required
            />
            <br />
            <label className={styles.label} htmlFor="city">
              City
            </label>
            <input
              className={styles.input}
              data-test-id="checkout-city"
              id="city"
              name="city"
              required
            />
            <br />
            <label className={styles.label} htmlFor="postalCode">
              Postal code
            </label>
            <input
              className={styles.input}
              data-test-id="checkout-postal-code"
              id="postalCode"
              name="postalCode"
              pattern="[0-9]*"
              inputMode="numeric"
              maxLength="4"
              required
            />
            <br />
            <label className={styles.label} htmlFor="country">
              Country
            </label>
            <input
              className={styles.input}
              data-test-id="checkout-country"
              id="country"
              name="country"
              pattern="[A-Za-z]+"
              required
            />
            <br />
            <br />
            <div className={styles.customerDetailsCheckout}>
              {' '}
              Payment informations
            </div>

            <br />
            <label className={styles.label} htmlFor="creditCard">
              Credit card
            </label>
            <input
              className={styles.input}
              data-test-id="checkout-credit-card"
              id="creditCardNumber"
              name="creditCardNumber"
              type="tel"
              pattern="\d*"
              maxLength="16"
              placeholder="Card Number"
              required
            />
            <br />
            <label className={styles.label} htmlFor="expirationDate">
              Expiration date
            </label>
            <input
              className={styles.input}
              data-test-id="checkout-expiration-date"
              id="expirationDate"
              name="credit-expires"
              type="tel"
              pattern="\d*"
              maxLength="4"
              placeholder="MM / YY"
              required
            />
            <br />
            <label className={styles.label} htmlFor="securityCode">
              Security code
            </label>
            <input
              className={styles.input}
              data-test-id="checkout-security-code"
              id="securityCode"
              name="credit-cvc"
              type="tel"
              pattern="\d*"
              maxLength="3"
              placeholder="CVC"
              required
            />
            <br />
            <br />

            <button
              className={styles.confirmButton}
              data-test-id="checkout-confirm-order"
              onClick={handleSubmit}
            >
              Confirm order
            </button>
            {/* <button
              formAction={async () => await deleteCookie(props.productId)}
            >
              Confirm order
            </button> */}
          </form>
        </div>
      </main>
    </div>
  );
}
