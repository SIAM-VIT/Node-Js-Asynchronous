
// calling already resolved promise
const p = Promise.resolve({id:1});
p.then(result=>console.log(result));

// calling already reject promise
const pa = Promise.reject(new Error('reason for failing...'));
pa.catch(error => console.log(error));
