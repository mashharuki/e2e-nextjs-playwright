import z from 'zod'

/**
 * タスク作成時のバリデーションスキーマ
 */
export const createTaskSchema = z.object({
  title: z.string().min(3),
  completed: z.boolean(),
})

/**
 * タスク更新時のバリデーションスキーマ
 */
export const updateTaskSchema = z.object({
  title: z.string().min(3).optional(),
  completed: z.boolean().optional(),
})

/**
 * タスクIDのバリデーションスキーマ
 */
export const taskIdSchema = z.object({
  taskId: z.string().uuid(),
})


export type UpdateTaskInput = z.TypeOf<typeof updateTaskSchema>
export type CreateTaskInput = z.TypeOf<typeof createTaskSchema>
export type TaskId = z.TypeOf<typeof taskIdSchema>
