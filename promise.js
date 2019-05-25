// Holds the eventual result of an asynchronous operation
// This is called Promise


// Wehn we create a promise it will be in a Pending State
// and than it kick off some async operation after getting result
// So result getting succesfully(resolved) otherwise something getting 
// wrong than it will reject.

const p = new Promise((resolve,reject)=>{
    // Kick off async work
    // ...
    setTimeout(()=>{
        // resolve(1);
        reject(new Error('message'));
    },2000);
});

p
    .then(result => console.log('Result',result))
    .catch(err => console.log('Error',err.message));