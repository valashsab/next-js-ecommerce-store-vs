'use client';

import { useState } from 'react';
import CreateCookie from './actions';

export default function SetCookieForm() {
  const [cookieValue, setCookieValue] = useState('');
  // update next.config.js in order to enable serverActions
  return (
    <form>
      <input
        value={cookieValue}
        onChange={(event) => setCookieValue(event.currentTarget.value)}
      />
      <button formAction={async () => await CreateCookie(cookieValue)}>
        Set cookie
      </button>
    </form>
  );
}
