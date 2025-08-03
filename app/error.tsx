'use client'

/**
 * エラー画面用のコンポーネント
 * @param param0 
 * @returns 
 */
export default function Error({ error }: { error?: Error }) {
  return (
    <div>
      <p className="mt-6 text-center text-red-500">
        Data fetching in server failed
      </p>
    </div>
  )
}
