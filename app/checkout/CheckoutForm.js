'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { deleteCookie } from './actions';
import styles from './CheckoutForm.module.scss';

export default function CheckOut() {
  const router = useRouter();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  const handlePostalCodeChange = (e) => {
    setPostalCode(e.target.value);
  };
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };
  const handleCreditCardNumberChange = (e) => {
    setCreditCardNumber(e.target.value);
  };
  const handleExpirationDateChange = (e) => {
    setExpirationDate(e.target.value);
  };
  const handleSecurityCodeChange = (e) => {
    setSecurityCode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (firstName.trim() === '') {
      alert('First name is required.');
      return;
    }
    if (lastName.trim() === '') {
      alert('Last name is required.');
      return;
    }
    if (email.trim() === '') {
      alert('Email is required.');
      return;
    }
    if (address.trim() === '') {
      alert('Address is required.');
      return;
    }
    if (city.trim() === '') {
      alert('City is required.');
      return;
    }
    if (postalCode.trim() === '') {
      alert('Postal code is required.');
      return;
    }
    if (country.trim() === '') {
      alert('Country is required.');
      return;
    }
    if (creditCardNumber.trim() === '') {
      alert('Credit card number is required.');
      return;
    }
    if (expirationDate.trim() === '') {
      alert('Expiration date is required.');
      return;
    }
    if (securityCode.trim() === '') {
      alert('Security code is required.');
      return;
    }

    await deleteCookie('cart');
    await router.push(`/thankyou`);
  };

  return (
    <div>
      <main>
        <div>
          <form onSubmit={handleSubmit} action="/submit" autoComplete="off">
            <div>Contact details</div>
            <br />
            <label className={styles.label} htmlFor="firstName">
              First name
            </label>
            <input
              className={styles.input}
              data-test-id="checkout-first-name"
              id="firstName"
              name="firstName"
              pattern="[A-Za-z]+"
              onChange={handleFirstNameChange}
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
              pattern="[A-Za-z]+"
              onChange={handleLastNameChange}
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
              onChange={handleEmailChange}
              required
            />
            <br />
            <br />
            <div> Shipping address</div>

            <br />
            <label className={styles.label} htmlFor="address">
              Address
            </label>
            <input
              className={styles.input}
              data-test-id="checkout-address"
              id="address"
              name="address"
              pattern="[A-Za-z]+"
              onChange={handleAddressChange}
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
              pattern="[A-Za-z]+"
              onChange={handleCityChange}
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
              onChange={handlePostalCodeChange}
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
              onChange={handleCountryChange}
              required
            />
            <br />
            <br />
            <div> Payment informations</div>

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
              onChange={handleCreditCardNumberChange}
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
              onChange={handleExpirationDateChange}
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
              onChange={handleSecurityCodeChange}
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
          </form>
        </div>
      </main>
    </div>
  );
}
