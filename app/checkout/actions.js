'use server';
import { cookies } from 'next/headers';

export async function deleteCookie(products) {
  await cookies().set(products, '', {
    maxAge: 0, // Set the maxAge to 0 to delete the cookie
  });
}
