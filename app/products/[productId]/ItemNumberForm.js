'use client';
import { useState } from 'react';
import { createOrUpdateItemNumber } from './actions';

export default function ItemNumberForm() {
  const [itemNumber, setItemNumber] = useState('');

  return (
    <form>
      <input
        type="number"
        id="quantity"
        value={itemNumber}
        onChange={(event) => setItemNumber(event.currentTarget.value)}
      />
      <button
        formAction={async () => await createOrUpdateItemNumber(itemNumber)}
      >
        Add to cart
      </button>
    </form>
  );
}
