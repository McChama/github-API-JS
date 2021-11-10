import API from "./apiData.js";

const getUserRepos = async user => {
  return await fetch(`${API.url}/users/${user}/repos`, {
    method: 'GET',
    headers: {
      Authorization: API.key,
      accept: 'application/vnd.github.v3+json',
    }
  })
  .then(response => response.json())
};

export default getUserRepos;