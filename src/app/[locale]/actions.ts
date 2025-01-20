'use server';

import { cookies } from 'next/headers';

export async function setCookies(name: string, value: any) {
  'use server';
  const cookieStore = await cookies();
  cookieStore.set(name, typeof value !== 'string' ? JSON.stringify(value) : value, {
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
  });
}

export async function getCookie(name: string) {
  'use server';
  const cookieStore = await cookies();
  return cookieStore.get(name);
}

export async function removeCookie(name: string) {
  'use server';
  const cookieStore = await cookies();
  cookieStore.delete(name);
}
