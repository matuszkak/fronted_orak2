import './index.html';
import './scss/style.scss';
import firebase from 'firebase/app';
import 'firebase/firestore';
import config from './db_config.js';


const firedb = firebase.initializeApp(config);
// elérhető a google hivatalos dokumentációjában pl. az inicializáció is
const db = firedb.firestore();


async function sendMessage(data) {
  const res = await db.collection('messages').add(data);
  console.log(res);
}

function displayMessage(message) {
  const messageDOM = `
  <div class="message">
    <i class="fas fa-user"></i>
    <div>
      <span class="username">${message.username}
        <time>20:12 PM</time>
      </span>
      <br>
        <span class="message-text">${message.message}
        </span>
  </div>
      <div class="message-edit-buttons">
        <i class="fas fa-trash-alt"></i>
        <i class="fas fa-pen"></i>
      </div>
    </div>
`;
  document.querySelector('#messages').insertAdjacentHTML('beforeend', messageDOM);
}

function createMessage() {
  const message = document.querySelector('#message').value;
  const username = document.querySelector('#nickname').value;
  // ha a változó neve ugyanaz mint a key amit létre akarunk hozni az objectban akkor nem kell kétszer kiírni
  return {
    message: message,
    username: username
  }
};

// amikor a HTML teljesen betölt
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#send').addEventListener('click', () => {
    const message = createMessage();
    if (message.username && message.message) {
      sendMessage(createMessage());
      displayMessage(message);
    }
  });
});
