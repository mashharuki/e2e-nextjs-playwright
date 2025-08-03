import prisma from '.'
import type {
  CreateTaskInput,
  TaskId,
  UpdateTaskInput,
} from '../../schema/task'

/**
 * タスクを取得するメソッド
 * @param userId 
 * @returns 
 */
export async function getTasks(userId: string) {
  try {
    const tasks = await prisma.task.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        createdAt: 'asc',
      },
    })
    return { tasks }
  } catch (error: any) {
    return { error }
  }
}

/**
 * 新しくタスクを作成するメソッド
 * @param task 
 * @param userId 
 * @returns 
 */
export async function createTask(task: CreateTaskInput, userId: string) {
  try {
    // prisma経由でDBにタスクを追加
    const createdTask = await prisma.task.create({
      data: {
        ...task,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    })
    return { task: createdTask }
  } catch (error: any) {
    return { error }
  }
}

/**
 * 指定したIDのタスクを取得するメソッド
 * @param param0 
 * @returns 
 */
export async function getTaskById({ taskId }: TaskId) {
  try {
    const task = await prisma.task.findUnique({
      where: { id: taskId },
    })
    return { task }
  } catch (error: any) {
    return { error }
  }
}

/**
 * 指定いたIDのタスクを削除するメソッド
 * @param param0 
 * @returns 
 */
export async function deleteTask({ taskId }: TaskId) {
  try {
    const task = await prisma.task.delete({
      where: { id: taskId },
    })
    return { task }
  } catch (error: any) {
    return { error }
  }
}

/**
 * 既存のタスクを更新するメソッド
 * @param task 
 * @param param1 
 * @returns 
 */
export async function updateTask(task: UpdateTaskInput, { taskId }: TaskId) {
  try {
    const updatedTask = await prisma.task.update({
      where: { id: taskId },
      data: {
        ...task,
      },
    })
    return { task: updatedTask }
  } catch (error: any) {
    return { error }
  }
}
