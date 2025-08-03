'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

/**
 * MonitorSessionコンポーネントは、セッションの変更を監視し、セッションが更新されるとページをリフレッシュします。
 * @returns 
 */
export default function MonitorSession() {
  const router = useRouter()
  const { data: session } = useSession()
  useEffect(() => {
    router.refresh()
  }, [session])
  return null
}
