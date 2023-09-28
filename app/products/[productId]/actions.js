'use server';
import { cookies } from 'next/headers';

export async function createOrUpdateItemNumber() {
  await cookies().set(itemNumbers, JSON.stringify());
}
