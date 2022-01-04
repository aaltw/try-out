import { ExecutorContext } from '@nrwl/devkit';
const fetch = require('node-fetch');
const fs = require('fs');

export interface TodosExecutorOptions {
  username: string;
  pwd: string;
  endpoint: string;
}

interface ApiTodoTask {
  date_created: string;
  done: boolean;
  id: string;
  task: string;
  url: string;
}

export default async function todosExecutor(
  options: TodosExecutorOptions,
  context: ExecutorContext
) {
  console.info(`Executing "todos"...`);

  // Get a token
  const token = await fetch(`${options.endpoint}/auth/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: options.username,
      password: options.pwd,
    }),
  })
    .then((response) => response.json())
    .then(
      (value: { data: { access_token: string } }) => value.data.access_token
    );

  await fetch(`${options.endpoint}/items/todos`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((response: { data: ApiTodoTask[] }) => {
      fs.writeFileSync('apps/app/src/assets/todos.json', JSON.stringify(response));
    });

  const success = true;
  return { success };
}
