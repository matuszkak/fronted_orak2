import '../css/searchImageComponent.css';

class SearchImage {
  async getImages(dogbreed) {

    if (!dogbreed) {
      window.alert('Nem lett beírva semmi a keresőbe!');
      return;
      //megállítjuk a futást
    }
    let urlString = '';
    dogbreed = dogbreed.split(' ');
    // szétvágja a sztringet ha alítousra is keresünk, mostmár tömb lesz
    if (dogbreed.length === 1) {
      urlString = `https://dog.ceo/api/breed/${dogbreed[0]}/images`;
    } else if (dogbreed.length === 2) {
      urlString = `https://dog.ceo/api/breed/${dogbreed[1]}/${dogbreed[0]}/images`;
    }
    const response = await fetch(urlString);
    const data = await response.json();
    const image = document.createElement('img');
    image.src = data.message[Math.floor(Math.random() * data.message.length)];
    document.querySelector('#content').appendChild(image);
    console.log(data);
  }
  render() {
    //megjelíníti a keresőt
    const markup = `
  <form class="dog-search">
    <span class="search-icon"></span>
    <input type="text" id="dogSearchInput">
    <button>Search</button>
  </form>
`;
    document.querySelector('#header').insertAdjacentHTML('beforeend', markup);
    // console.log(this);
    // const self = this;
    document.querySelector('.dog-search button').addEventListener('click', (event) => {
      event.preventDefault();
      // console.log(this);
      // console.log(event);
      const searchTerm = document.querySelector('#dogSearchInput').value;
      this.getImages(searchTerm);
    });
  }

}

export default SearchImage;
