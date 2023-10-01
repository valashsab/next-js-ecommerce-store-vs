'use client';
import { useState } from 'react';
import { setOrUpdateQuantity } from './actions';

export default function AddToCartForm(props) {
  const [itemNumber, setItemNumber] = useState(1);

  return (
    <form>
      <input
        type="number"
        id="quantity"
        min="0"
        value={itemNumber}
        onChange={(event) => setItemNumber(event.currentTarget.value)}
      />
      <button
        formAction={async () =>
          await setOrUpdateQuantity(props.productId, itemNumber)
        }
      >
        Add to cart
      </button>
      <button onClick={() => setItemNumber(itemNumber + 1)}>+</button>
      <button onClick={() => setItemNumber(itemNumber - 1)}>-</button>
    </form>
  );
}
