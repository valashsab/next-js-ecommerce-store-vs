import { cookies } from 'next/headers';
import SetCookieForm from './SetCookieForm';

export default function setCookiePage() {
  const getCookieValue = cookies().get('testCookie');
  console.log(getCookieValue);

  return (
    <>
      <div>Cookie value: </div>
      <SetCookieForm />
    </>
  );
}
