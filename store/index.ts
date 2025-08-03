import type { Task } from '@prisma/client'
import create from 'zustand'

type EditedTask = Omit<Task, 'createdAt' | 'updatedAt' | 'userId'>

type State = {
  editedTask: EditedTask
  updateEditedTask: (payload: EditedTask) => void
  resetEditedTask: () => void
}

/**
 * Zustand store for managing the state of the edited task.
 */
const useStore = create<State>((set) => ({
  editedTask: { id: '', title: '', completed: false },
  updateEditedTask: (payload) =>
    set({
      editedTask: payload,
    }),
  resetEditedTask: () =>
    set({ editedTask: { id: '', title: '', completed: false } }),
}))

export default useStore
