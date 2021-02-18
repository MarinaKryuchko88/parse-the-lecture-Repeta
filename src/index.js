import './styles.css';
import refs from './js/refs';
import fetchArticles from './js/fetch-articles';
import articlesMarkup from './js/articles-markup';

let inputValue = '';
let page = 1;

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;
  inputValue = form.elements.query.value;
  //   console.log(event.currentTarget);

  refs.articlesContainer.innerHTML = '';
  form.reset(); //чтобы поле ввода очищалось после нажатия на кнопку отправить

  page = 1;
  fetchArticles(inputValue, page).then(articles => {
    // здесь фц articlesMarkup ждет в аргументы articles, а фц fetchArticles как раз их возвращает;
    articlesMarkup(articles);
    page += 1;
  });
});

refs.loadMoreBtn.addEventListener('click', () => {
  fetchArticles(inputValue, page).then(articles => {
    articlesMarkup(articles);
    page += 1;
  });
});

// *************************************************************************
// const options = {method: 'GET', headers: {Accept: 'application/json'}};
// fetch('http://hn.algolia.com/api/v1/search?query=html')
// .then(response => response.json())
// .then(data => console.log(data))
// ##########################################################################
// const refs = {
//   articlesContainer: document.querySelector('.js-articles'),
//   searchForm: document.querySelector('.js-search-form'),
// };

// refs.searchForm.addEventListener('submit', event => {
//   event.preventDefault();
//   console.log(event.currentTarget);

//   const form = event.currentTarget;
//   const inputValue = form.elements.query.value;

//   const apiKey = '272d456906a246f8b1eb5465a97fb0c7';
//   const url = `http://newsapi.org/v2/everything?q=${inputValue}&language=en`;
//   const options = {
//     headers: {
//       Authorization: apiKey,
//     },
//   };

//   refs.articlesContainer.innerHTML = '';

//   fetch(url, options)
//     .then(response => response.json())
//     .then(({ articles }) => {
//       console.log(articles);
//       const markup = articlesTpl(articles);
//       refs.articlesContainer.insertAdjacentHTML('beforeend', markup);
//     })
//     .catch(error => console.log(error));
// });
