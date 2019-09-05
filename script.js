function returnsPromise(data) {
  if (typeof data !== 'number' || isNaN(data)) {
    return Promise.reject('What is this! I want numbers!');
  }
  if (data % 2 !== 0) {
    return Promise.reject('What the hell?? I only like even numbers.');
  }
  if (data < 18) {
    return Promise.reject('Under 18? That number is too small');
  }
  if (data > 100) {
    return Promise.reject('Over 100? That number is too big');
  }
  return Promise.resolve({ message: `I am happy with number ${data}` });
}

// promises sometimes resolve
// promises sometimes reject

// we want to fetch data from an api at the click 
// of a button
// we build a function called getGithubData
// and add it as a click handler to the <h1>

// the getGithubData function uses axios to get the stuff
// axios returns a promise, so we need to hook up
// sad path and happy path
// axios.get takes a url
// if the request succeeds, the browser calls the 
// happy path callback, injecting the axios stuff
// if the request fails, the browser calls 
// the sad path, injecting the axios error


function getGithubData() {
  axios.get('https://api.github.com/users/Ladrillo')
    .then(response => { // response is what the promise resolved to (what it looks is up to axios)
      document.body.innerText = response.data.name;
    })
    .catch(error => { // error is what the promise rejected to (what it looks like depends on axios)
      document.body.innerText = error.message;
    });
}

// not gonna work
// code here executeS BEFORE THE PROMISE RESOLVES OR REJECTS

document.querySelector('h1')
  .addEventListener('click', getGithubData);
