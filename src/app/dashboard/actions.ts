'use server';

import { signOut } from '@/lib/auth/actions';
import { redirect } from 'next/navigation';

export async function logout() {
  await signOut();
  redirect('/login');
}