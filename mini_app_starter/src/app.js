import '@fortawesome/fontawesome-free/css/all.css';
import './scss/index.scss';
import './index.html';

import renderLoginPage from './pages/login-page';
import { addData, getData } from './database';
import './even-listeners';
import { loginStatus } from './auth';
import renderInnerPage from './pages/inner-page';

// renderLoginPage();

// DB communication test
// async function main() {

// addData({ name: 'Mira', age: 9 });

//   console.log(await getData());
// }
// main();

async function main() {
  try {
    const user = await loginStatus();
    console.log(user);
    if (user) {
      renderInnerPage();
    } else {
      renderLoginPage();
    }
  } catch (e) {
    console.log('hiba a loginStatus lekérdezése közben...');
    renderLoginPage();
  }
}
// main();
// az előző main() fügvény .then-el megírva így néz ki,
// csak az egyiket használjuk mert mindkettőnek ugyanaz a funkciója
loginStatus().then(user => {
  console.log(user);
  if (user) {
    // ha létezik a user változó, akkor be vagyunk jelentkezve
    // ezért a beloldalt jelenítjük meg a usernek
    renderInnerPage();
  } else {
    // ha nem vagyunk bejelentkezve akkor nincs user változó
    // tehát a loginpage-et jelenítjük meg
    renderLoginPage();
  }
  // bármi hiba esetén is a login page-et rendereljük
}).catch((e) => {
  renderLoginPage();
  console.log(e);
});
