import API from "./apiData.js";

const getUserRepos = (user) => {

  fetch(`${API.url}/users/${user}/repos`, {
    method: 'GET',
    headers: {
      Authorization: API.key,
      accept: 'application/vnd.github.v3+json',
    }
  })
    .then(response => response.json())
    .then(repos => {

      console.log(repos)

    })
  };

export default getUserRepos;