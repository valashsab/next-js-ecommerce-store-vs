'use client';

import { useState } from 'react';
import { setOrUpdateQuantity } from './actions';

export default function AddToCartForm(props) {
  const [quantity, setQuantity] = useState(1);

  return (
    <form>
      <input
        data-test-id="product-quantity"
        type="number"
        id="quantity"
        min="1"
        step="1" // incremental step when using the arrows
        value={quantity}
        onChange={(event) => setQuantity(parseInt(event.currentTarget.value))}
      />

      {/* <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button> */}
      <button
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
