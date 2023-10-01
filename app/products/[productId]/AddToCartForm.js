'use client';
import { useState } from 'react';
import { setOrUpdateQuantity } from './actions';

export default function AddToCartForm(props) {
  const [quantity, setQuantity] = useState(1);

  return (
    <form>
      <input
        type="number"
        id="quantity"
        min="0"
        value={quantity}
        onChange={(event) => setQuantity(event.currentTarget.value)}
      />
      <button
        formAction={async () =>
          await setOrUpdateQuantity(props.productId, quantity)
        }
      >
        Add to cart
      </button>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
      <button onClick={() => setQuantity(quantity - 1)}>-</button>
    </form>
  );
}
