import { cookies } from 'next/headers';

// nullish coalescing operator: if value on left-side is undefined, it will return undefined, if not the value will be returned
export function getCookie(name: string) {
  return cookies().get(name)?.value;
}

// export function setCookie(name: string) {
//   return cookies().set(name).value;
// }
