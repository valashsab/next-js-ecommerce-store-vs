import { cookies } from 'next/headers';

// nullish coalescing operator: if value on left-side is undefined, it will return undefined, if not the value will be returned
export function getCookie(name) {
  return cookies().get(name)?.value;
}
