'use server';
import { cookies } from 'next/headers';

export async function CreateCookie(value) {
  await cookies().set('testCookie', value);
}
