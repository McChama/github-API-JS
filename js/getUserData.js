const getUserData = (url, params) => {
  const API_URL = url,
        user = params.user;

  fetch(`${API_URL}/users/${user}`, {
    method: 'GET',
    headers: {
      Authorization: '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',
      accept: 'application/vnd.github.v3+json',
    }
  })
    .then(response => response.json())
    .then(repos => {

      console.table(repos)
      document.querySelector("#profile").innerHTML = repos;
    })
  };

export default getUserData;