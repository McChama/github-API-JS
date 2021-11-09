import API from "./apiData.js";

const getUserData = (user) => {

  fetch(`${API.url}/users/${user}`, {
    method: 'GET',
    headers: {
      Authorization: API.key,
      accept: 'application/vnd.github.v3+json',
    }
  })
    .then(response => response.json())
    .then(user => {

      console.log(user)

    })
  };

export default getUserData;