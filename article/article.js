function articleMaker({ title, text1, text2 }) {
  const requiredElements = ['button', 'article', 'h3', 'p', 'p'];
  const [button, article, h3, p1, p2] = requiredElements.map(
    element => document.createElement(element)
  );

  h3.textContent = title;
  p1.textContent = text1;
  p2.textContent = text2;
  button.textContent = 'toggle';

  p1.classList.add('hidden');
  p2.classList.add('hidden');

  button.addEventListener('click', () => {
    p1.classList.toggle('hidden');
    p2.classList.toggle('hidden');
  });

  article.appendChild(h3);
  article.appendChild(p1);
  article.appendChild(p2);
  article.appendChild(button);

  return article;
}

function successHandler(response) {
  response.data.forEach(article => {
    document.querySelector('.articles')
      .appendChild(articleMaker(article));
  });
}

function failureHandler(error) {
  const errorMessage = document.createElement('div');
  errorMessage.innerHTML = `<h1>${error.response.data.error}</h1>`;
  document.querySelector('#petsContainer').prepend(errorMessage);
}

axios.get('http://localhost:4000/articles')
  .then(successHandler)
  .catch(failureHandler);
