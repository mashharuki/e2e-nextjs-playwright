import z from 'zod'

/**
 * タスク作成時のバリデーションスキーマ
 */
export const createTaskSchema = z.object({
  // タイトルは3文字以上
  // 完了状態はboolean型
  title: z.string().min(3),
  completed: z.boolean(),
})

/**
 * タスク更新時のバリデーションスキーマ
 */
export const updateTaskSchema = z.object({
  // タイトルは3文字以上、オプション
  // 完了状態はboolean型、オプション
  title: z.string().min(3).optional(),
  completed: z.boolean().optional(),
})

/**
 * タスクIDのバリデーションスキーマ
 */
export const taskIdSchema = z.object({
  // UUID形式のタスクID
  taskId: z.string().uuid(),
})


export type UpdateTaskInput = z.TypeOf<typeof updateTaskSchema>
export type CreateTaskInput = z.TypeOf<typeof createTaskSchema>
export type TaskId = z.TypeOf<typeof taskIdSchema>
