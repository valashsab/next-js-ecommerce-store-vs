'use client';

import { ChangeEvent, useState } from 'react';
import { setOrUpdateQuantity } from './actions';
import styles from './AddToCartForm.module.scss';

type Props = {
  productId: number;
};

export default function AddToCartForm(props: Props) {
  const [quantity, setQuantity] = useState(1);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setQuantity(parseInt(event.currentTarget.value));
  }

  return (
    <form>
      <input
        className={styles.quantityInput}
        data-test-id="product-quantity"
        type="number"
        id="quantity"
        min="1"
        step="1" // incremental step when using the arrows
        value={quantity}
        onChange={handleChange}
        // original way: onChange={(event) => setQuantity(parseInt(event.currentTarget.value)}
      />

      {/* <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button> */}
      <button
        className={styles.addToCartButton}
        data-test-id="product-add-to-cart"
        formAction={async () =>
          await setOrUpdateQuantity(props.productId, quantity)
        }
      >
        Add to cart
      </button>
    </form>
  );
}
