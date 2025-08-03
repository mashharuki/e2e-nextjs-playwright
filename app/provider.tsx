'use client'
import { SessionProvider } from 'next-auth/react'

/**
 * Providerコンポーネント
 * @param param0 
 * @returns 
 */
export default function Provider({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>
}
