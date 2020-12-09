import { writable } from 'svelte/store'

export const initialState = {
  tags: []
}

export const store = writable(initialState, fetchTaskData)

async function fetchTaskData(set) {
  try {
    const response = await fetch('/tag.json')

    if (response.ok) {
      const tags = await response.json()
      set({ tags })
    } else {
      const text = response.text()
      throw new Error(text)
    }
  } catch (error) {
    set({ error })
  }
  return () => {}
}

export const tagStore = {
  subscribe: store.subscribe,
  update: store.update
}

export default tagStore
