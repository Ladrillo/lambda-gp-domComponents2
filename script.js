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

const onPromiseResolved = resolvedValue => {
  debugger
};

const onPromiseRejected = error => {
  debugger
};

const onNoMatterWhat = () => {
  debugger
};

returnsPromise(25)
  .then(onPromiseResolved)
  .catch(onPromiseRejected)
  .finally(onNoMatterWhat);
