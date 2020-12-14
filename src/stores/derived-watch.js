import { derived } from 'svelte/store'

import watchStore from 'stores/watch.js'
import taskStore from 'stores/task.js'

import { sortBy } from 'helper/array.js'

export const store = derived(
  [watchStore, taskStore],
  async ([$watches, $tasks], set) => {
    if (!$watches.error) {
      const derivedWatches = $watches.watches.map(watch => {
        const derivedTasks = categorizeTasks($tasks, watch.tags)
        return {
          ...watch,
          tasks: derivedTasks
        }
      })
      set({
        watches: derivedWatches
      })
    } else {
      set({
        $watches
      })
    }
  }
)

const scoreMap = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5
}

const categorizeTasks = (tasks, tags) => {
  if (!tasks.error) {
    let todoTasks = [],
      doneTasks = [],
      inprogressTasks = [],
      uncategorizedTasks = [],
      totalPriority = 0,
      totalTasks = 0

    tasks.tasks.forEach(task => {
      if (task.tags.every(tag => tags.includes(tag))) {
        if (task.priority) {
          totalPriority += scoreMap[task.priority]
          totalTasks++
        }
        switch (task.status) {
          case 'todo':
            $: todoTasks = todoTasks.concat(task)
            break
          case 'inprogress':
            $: inprogressTasks = inprogressTasks.concat(task)
            break
          case 'done':
            $: doneTasks = doneTasks.concat(task)
            break
          default:
            $: uncategorizedTasks = uncategorizedTasks.concat(task)
            break
        }
      }
    })

    todoTasks = sortBy(todoTasks, 'priority')
    inprogressTasks = sortBy(inprogressTasks, 'priority')
    doneTasks = sortBy(doneTasks, 'priority')
    uncategorizedTasks = sortBy(uncategorizedTasks, 'priority')

    return {
      todoTasks,
      inprogressTasks,
      doneTasks,
      uncategorizedTasks,
      priority: totalPriority / totalTasks
    }
  }

  return tasks
}

export default store
