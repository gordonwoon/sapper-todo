import { tasks } from './_data.js';

export function get(req, res, next) {
  res.end(JSON.stringify(tasks))
}

export function post(req, res, next) {
  const { task, tags } = req.body;
  tasks.push({ task, tags})

  res.end(JSON.stringify(tasks))
}
