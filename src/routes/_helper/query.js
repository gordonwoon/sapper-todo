const tagRegex = /^@(\S+)/g

export function compile(query) {
  query = query.split(' ')
  const action = query.shift()
  const tags = []
  const task = query.filter(text => {
    let tag = tagRegex.exec(text)
    tag = tag && tag.pop()
    if (tag) {
      tags.push(tag)
      return false
    }
    return true
  })
  return {
    action,
    tags,
    task: task.join(' ')
  }
}
