'use client';

import { useEffect, useState } from 'react';
import styles from './CookieBanner.module.scss';
import { parseJson } from './util/json';
import { getLocalStorage, setLocalStorage } from './util/localStorage';

export default function CookieBanner() {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  useEffect(() => {
    const localStorageValue = getLocalStorage('cookiePolicy');
    if (localStorageValue) {
      setCookiesAccepted(parseJson(localStorageValue));
    } else {
      setCookiesAccepted(false);
    }
  }, []);

  return (
    <div
      className={`${styles.cookieBanner} ${
        cookiesAccepted ? styles.closed : styles.open
      }`}
    >
      <div>
        {' '}
        This website uses cookies to enhance your browsing experience, serve
        personalised ads or content, and analyse our traffic. By clicking
        "Accept All", you consent to our use of cookies.
      </div>
      <button
        className={styles.button}
        onClick={() => {
          setLocalStorage('cookiePolicy', JSON.stringify(true));
          setCookiesAccepted(true);
        }}
      >
        Accept All
      </button>
      <button
        className={styles.button}
        onClick={() => {
          setLocalStorage('cookiePolicy', JSON.stringify(true));
          setCookiesAccepted(false);
        }}
      >
        Reject All
      </button>
    </div>
  );
}
