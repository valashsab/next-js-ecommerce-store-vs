'use server';
import { cookies } from 'next/headers';

export async function deleteCookie(cart) {
  await cookies().set(cart, '', {
    maxAge: 0, // Set the maxAge to 0 to delete the cookie
  });
}
