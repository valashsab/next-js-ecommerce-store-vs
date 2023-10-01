'use client';
import { useState } from 'react';
import { setOrUpdateQuantity } from './actions';

export default function AddToCartForm(props) {
  const [quantity, setQuantity] = useState('');
  const [counter, setCounter] = useState('');

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <form>
      <input
        data-test-id="product-quantity"
        type="number"
        id="quantity"
        min="0" // or does it have to be 1 according to instructions?
        value={quantity}
        onChange={(event) => setQuantity(event.currentTarget.value)}
      />
      <button onClick={increaseCounter}>+</button>
      <button onClick={decreaseCounter}>-</button>
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
