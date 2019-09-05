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

axios.get('http://localhost:4000/articles')
  .then(data => {
    debugger
  })
  .catch(error => {
    debugger
  });


// axios  <---

// requesting things over the network
// takes time
// so we use functions that, instead of returning a value
// (which is not available, because it takes time to get it)
// RETURN a promise.

// A promise is just an object with some methods we can use
// to schedule future behavior
// (what should happen once the value I wanted becomes available
// OR the action fails)
