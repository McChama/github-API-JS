const TAGS = {
  'name': ({ name, html_url }) => `<h3 class="card-title"><a href="${html_url}">${name}</a></h3>`,
  'description': ({ description }) => `<p class="card-content">${(description || 'No description provided')}</p>`,
  'topics': ({ topics }) => topics.map(topic => `<span class="pill">${topic}</span>`).join(""),
}

const showResult = ({ avatar_url, login, html_url }, repositories) => {
  document.querySelector('#avatar').src = avatar_url;
  document.querySelector('#username').innerText = login;
  document.querySelector('#username').href = html_url;

  const cards = repositories.map(repo => {
    let card = `<div class="card">`;
    for (const TAG in TAGS) card += TAGS[TAG](repo);
    card += `</div>`;
    return card;
  }).join("");
  document.querySelector('.flex-container').innerHTML = cards;
};

export default showResult;