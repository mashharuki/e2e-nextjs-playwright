'use client'
import { useRouter } from 'next/navigation'
import useStore from '../../store'

/**
 * タスク編集コンポーネント
 * @returns 
 */
export default function TaskEdit() {
  const router = useRouter()
  const { editedTask } = useStore()

  const updateEditedTask = useStore((state) => state.updateEditedTask)
  const resetEditedTask = useStore((state) => state.resetEditedTask)

  /**
   * タスクの新規作成および更新を行うハンドラーメソッド
   * @param e 
   */  
  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (editedTask.id === '') {
      // 新規タスク作成API呼び出し
      await fetch(`/api/tasks/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: editedTask.title, completed: false }),
      })
      router.refresh()
      resetEditedTask()
    } else {
      // タスク更新API呼び出し
      await fetch(`/api/tasks/${editedTask.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: editedTask.title,
          completed: editedTask.completed,
        }),
      })
      router.refresh()
      resetEditedTask()
    }
  }
  return (
    <div className="m-5 text-center">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="my-2 rounded border border-gray-300 px-3 py-2 text-sm placeholder-gray-500 focus:outline-none"
          placeholder="New task ?"
          value={editedTask.title || ''}
          onChange={(e) =>
            updateEditedTask({ ...editedTask, title: e.target.value })
          }
        />
        <button
          type="submit"
          className="ml-2 rounded bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700 "
        >
          {editedTask.id === '' ? 'Create' : 'Update'}
        </button>
      </form>
    </div>
  )
}
