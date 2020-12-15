import { writable } from 'svelte/store'
import { fetchAPI } from 'stores/api.js'

export const initialState = {
  tags: []
}

function createTag() {
  const { subscribe, set, update } = writable(initialState)

  return {
    subscribe,
    update,
    fetchAll: async () => {
      const fetchedTag = await fetchAPI('tag.json')
      set({ tags: fetchedTag.data, error: fetchedTag.error })
    }
  }
}

export const tagStore = createTag()
