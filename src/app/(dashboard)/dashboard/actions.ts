'use server'

import { signOut } from '@/lib/supabase/auth'

export async function logout() {
  return await signOut()
}