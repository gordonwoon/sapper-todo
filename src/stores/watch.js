import { writable } from 'svelte/store'

export const initialState = {
  watches: []
}

export const store = writable(initialState, fetchWatchData)

async function fetchWatchData(set) {
  try {
    const response = await fetch('/watch.json')

    if (response.ok) {
      const watches = await response.json()
      set({ watches })
    } else {
      const text = response.text()
      throw new Error(text)
    }
  } catch (error) {
    set({ error })
  }
  return () => {}
}

export const watchStore = {
  subscribe: store.subscribe,
  update: store.update
}

export default watchStore
