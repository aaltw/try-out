const core = require('@actions/core');
const github = require('@actions/github');
const fetch = require('node-fetch');

try {
  run();
} catch (error) {
  core.setFailed(error.message);
}

async function run() {
  const apiEndpoint = core.getInput('api-endpoint');
  const apiUsername = core.getInput('api-username');
  const apiPassword = core.getInput('api-password');

  // Get a token
  const token = await fetch(`${apiEndpoint}/auth/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: apiUsername,
      password: apiPassword,
    }),
  })
    .then((response) => response.json())
    .then((value) => value.data.access_token);

  // Fetch todos
  await fetch(
    `${apiEndpoint}/items/todos?filter[active][_eq]=true&filter[done][_eq]=false&filter[visible][_eq]=true`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(`Found todo's: ${response.data.length}`);
      core.setOutput('todos', response);
    });
}
