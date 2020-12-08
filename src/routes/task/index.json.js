import { tasks } from './_data.js';

export function get(req, res, next) {
  const { status } = req.query;
  if (status) {
    return res.end(JSON.stringify(tasks.filter(task => task.status === status)))
  }
  res.end(JSON.stringify(tasks))
}

export function post(req, res, next) {
  const { task, tags, status } = req.body;
  tasks.push({ task, tags, status})

  res.end(JSON.stringify(tasks))
}
