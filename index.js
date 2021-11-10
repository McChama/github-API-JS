import getUserData from "./js/getUserData.js";
import getUserRepos from "./js/getUserRepos.js";
import showResult from "./js/showResults.js";

const SEARCH_BUTTON = document.getElementById('btnSearch');
const USER_TEXT = document.getElementById('txtUsername');
const CONTENT_AREA = document.querySelector('.flex-container');

SEARCH_BUTTON.addEventListener('click', async () => {
  const COLOR = Math.floor(Math.random()*16777215).toString(16);
  if (USER_TEXT.value.length > 0){
    const USER = USER_TEXT.value;
    const USER_DATA = await getUserData(USER);
    const REPOS = await getUserRepos(USER);
    
    if (REPOS) 
      showResult(USER_DATA, REPOS);
    else 
      CONTENT_AREA.innerHTML = `<h2>We couldn't find any repositories associated to this account</h2>`;

    document.documentElement.style.setProperty('--main-color', `#${COLOR}`);
  } else {
    CONTENT_AREA.innerHTML = `
      <h2>Enter a username first</h2>
    `
  }
})

