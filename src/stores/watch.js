import { writable } from 'svelte/store'
import { fetchAPI } from 'stores/api.js'

export const initialState = {
  watches: []
}

function createWatch() {
  const { subscribe, set, update } = writable(initialState)

  return {
    subscribe,
    update,
    fetchAll: async () => {
      const fetchedWatch = await fetchAPI('watch.json')
      set({ watches: fetchedWatch.data, error: fetchedWatch.error })
    }
  }
}

export const watchStore = createWatch()
