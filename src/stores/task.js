import { writable } from 'svelte/store'
import { fetchAPI } from 'stores/api.js'

export const initialState = {
  tasks: []
}

function createTask() {
  const { subscribe, set, update } = writable(initialState)

  return {
    subscribe,
    update,
    fetchAll: async () => {
      const fetchTask = await fetchAPI('task.json')
      set({ tasks: fetchTask.data, error: fetchTask.error })
    }
  }
}

export const taskStore = createTask()
