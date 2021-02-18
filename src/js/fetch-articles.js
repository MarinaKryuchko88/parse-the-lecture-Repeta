// import articlesMarkup from './articles-markup';

function fetchArticles(queryParameter, page) {
  const apiKey = '272d456906a246f8b1eb5465a97fb0c7';
  const url = `http://newsapi.org/v2/everything?q=${queryParameter}&pageSize=10&page=${page}`;
  const options = {
    headers: {
      Authorization: apiKey,
    },
  };

  // поставив return, возвращаем из этой функции promise с data.articles, тогда в месте ее вызова можем сделать then;
  return (
    fetch(url, options)
      .then(response => response.json())
      .then(data => data.articles) // здесь принимает от бэкэнда не все св-ва, а только articles, т.е. [{},{},...{}];
      // .then(({ articles }) => {    //здесь деструктуризировали св-во articles из {}, кот. пришел от бэкэнда;
      //   articlesMarkup(articles);
      // })
      .catch(error => console.log(error))
  );
}

export default fetchArticles;

// эта функция делает только 1-но действие: отправляет запрос и получает ответ.
// а дальше то, что мы будем делать с этим ответом, это уже другая фукция.
// в данной задаче мы эти данные рендерим в браузер с помощью шаблона.
