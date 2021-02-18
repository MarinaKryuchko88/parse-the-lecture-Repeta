import articlesTpl from '../templates/articles.hbs';
import refs from './refs';

function articlesMarkup(articles) {
  const markup = articlesTpl(articles);
  refs.articlesContainer.insertAdjacentHTML('beforeend', markup);
}

export default articlesMarkup;
