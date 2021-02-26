// fetch('http://www.omdbapi.com/?apikey=d450b250&s=red')
//   .then(response => response.json())
//   .then(json => console.log(json));

const input = document.getElementById('searchFilm'),
      submit = document.getElementById('submit');

const getFilms = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response}`)
  }

  return await response.json();

};

input.addEventListener('click', () => {
  let inputValue = input.nodeValue;
  console.log(inputValue);
});

getFilms('http://www.omdbapi.com/?apikey=d450b250&s').then((data) => console.log(data))