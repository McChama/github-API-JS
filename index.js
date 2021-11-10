import getUserData from "./js/getUserData.js";
import getUserRepos from "./js/getUserRepos.js";
import showResult from "./js/showResults.js";

const SEARCH_BUTTON = document.getElementById('btnSearch');
const USER_TEXT = document.getElementById('txtUsername');

const resetView = (message = 'Enter a github user to search their repos', resetAvatar = true) => {
  if (resetAvatar) document.querySelector('#avatar').src = "./images/profile.png";
  document.querySelector('#username').innerText = "";
  document.querySelector('#username').href = "";
  document.querySelector('.flex-container').innerHTML = `<h2>${message}</h2>`;
}

SEARCH_BUTTON.addEventListener('click', async () => {
  const COLOR = Math.floor(Math.random()*16777215).toString(16);
  const USER = USER_TEXT.value;

  if (USER.length > 0){
    const USER_DATA = await getUserData(USER);
    
    if (!(USER_DATA.message == "Not Found")){
      const REPOS = await getUserRepos(USER);
      showResult(USER_DATA, REPOS);
      (REPOS.length == 0) && resetView("We couldn't find any public repositories associated to this account", false);
      document.documentElement.style.setProperty('--main-color', `#${COLOR}`);
    } 
    else 
      resetView("We couldn't find any github profile associated to this username");
  } 
  else 
    resetView('Enter a username first');
})
  