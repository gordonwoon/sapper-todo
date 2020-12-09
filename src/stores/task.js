import { writable } from 'svelte/store'

export const initialState = {
  tasks: []
}

export const store = writable(initialState, fetchTaskData)

async function fetchTaskData(set) {
  try {
    const response = await fetch('/task.json')

    if (response.ok) {
      const tasks = await response.json()
      set({ tasks })
    } else {
      const text = response.text()
      throw new Error(text)
    }
  } catch (error) {
    set({ error })
  }
  return () => {}
}

export const taskStore = {
  subscribe: store.subscribe,
  update: store.update
}

export default taskStore
