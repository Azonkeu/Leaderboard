import { fetchScore, scores, game } from './game.js';
import './style.css';

const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const gameIdFromStorage = () => {
  const localStorageId = localStorage.getItem('id') ? JSON.parse(localStorage.getItem('id')) : null;
  return localStorageId;
};
const saveGameOnLocalStorage = () => {
  const data = {
    name: 'My new game',
  };
  if (!gameIdFromStorage()) {
    window.addEventListener('load', async () => {
      const { result } = await game(`${baseURL}games`, data);
      const gameID = result.substr(14, 20);
      localStorage.setItem('id', JSON.stringify(gameID));
    });
  }
};

const newScore = () => {
  const data = {
    user: '',
    score: '',
  };
  const player = document.getElementById('name');
  const playerScore = document.getElementById('scoreNumber');
  const submitData = document.getElementById('submit');

  player.addEventListener('change', (e) => {
    data.user = e.target.value;
  });
  playerScore.addEventListener('change', (e) => {
    data.score = e.target.value;
  });

  submitData.addEventListener('click', async (e) => {
    e.preventDefault();
    const url = `${baseURL}games/${gameIdFromStorage()}/scores`;
    await scores(url, data);
    player.value = '';
    playerScore.value = '';
    window.location.reload();
  });
};

const getScores = async () => {
  const divTag = document.querySelector('.divscore');
  const ulTag = document.createElement('ul');
  ulTag.className = 'score';
  const liTag = document.createElement('li');
  const smallTag1 = document.createElement('small');
  const smallTag2 = document.createElement('small');
  const url = `${baseURL}games/${gameIdFromStorage()}/scores/`;
  const { result } = await fetchScore(url);
  result.forEach((item) => {
    smallTag1.textContent = `${item.user}:`;
    smallTag2.textContent = item.score;
    liTag.appendChild(smallTag1);
    liTag.appendChild(smallTag2);
    divTag.appendChild(ulTag);
    ulTag.appendChild(liTag.cloneNode(true));
  });
};

const refresh = document.querySelector('#refresh');
refresh.addEventListener('click', () => {
  window.location.reload();
});

getScores();
saveGameOnLocalStorage();
newScore();