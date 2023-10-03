'use client';

export default function CheckOut() {
  return (
    <div>
      <main>
        <div>
          <form>
            <label htmlFor="firstName">First name</label>
            <input data-test-id="checkout-first-name" required />
            <br />

            <label htmlFor="lastName">Last name</label>
            <input data-test-id="checkout-last-name" required />
            <br />

            <label htmlFor="email">Email</label>
            <input data-test-id="checkout-email" required />
            <br />

            <label htmlFor="address">Address</label>
            <input data-test-id="checkout-address" required />
            <br />

            <label htmlFor="city">City</label>
            <input data-test-id="checkout-city" required />
            <br />

            <label htmlFor="postalCode">Postal code</label>
            <input data-test-id="checkout-postal-code" required />
            <br />

            <label htmlFor="country">Country</label>
            <input data-test-id="checkout-country" required />
            <br />

            <label htmlFor="creditCard">Credit card</label>
            <input data-test-id="checkout-credit-card" required />
            <br />

            <label htmlFor="expirationDate">Expiration date</label>
            <input data-test-id="checkout-expiration-date" required />
            <br />

            <label htmlFor="securityCode">Security code</label>
            <input data-test-id="checkout-security-code" required />
            <br />

            <button data-test-id="checkout-confirm-order">Confirm</button>
          </form>
        </div>
      </main>
    </div>
  );
}
