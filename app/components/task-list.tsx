import type { Task } from '@prisma/client'
import { cookies } from 'next/headers'
import TaskItem from './task-item'

/**
 * タスクを取得する非同期関数
 * @param token 
 * @returns 
 */
async function fetchTasks(token: string | undefined) {
  const res = await fetch(
    `${
      process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}/api/tasks`
        : `${process.env.NEXTAUTH_URL}/api/tasks`
    }`,
    {
      headers: {
        cookie: `next-auth.session-token=${token}`,
      },
    }
  )
  if (!res.ok) {
    throw new Error('Failed to fetch data in server')
  }
  const tasks: Task[] = await res.json()
  return tasks
}

/**
 * タスク一覧を表示するコンポーネント
 * @returns 
 */
export default async function TaskList() {
  const nextCookies = cookies()
  // next-authのセッショントークンを取得
  const token = nextCookies.get('next-auth.session-token')

  // fetchTasksメソッドを呼び出す
  const tasks = await fetchTasks(token?.value)
  return (
    <ul className="my-6 mx-3">
      {tasks?.map((task) => (
        <TaskItem key={task.id} {...task} />
      ))}
    </ul>
  )
}
