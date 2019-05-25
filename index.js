console.log('Before');

getUser(1,getRepositories);

console.log('After');


function getRepositories(repos){
    console.log(repos);
    getRepositories(user.gitUserName,getCommits);
}

function getCommits(repos){
    console.log(commits);
    getCommits(repos,displayCommits);
}

function displayCommits(commits){
    console.log(commits);
}

function displayUser(user){
    console.log(user);
}

// This function is Async
function getUser(id,callback){
    setTimeout(()=>{
        console.log('Reading a user from a database...');
        callback({id:id,gitUserName:'HrithikMittal'});
    },2000);
}

function getRepositories(username,callback){
    setTimeout(()=>{
        console.log('Calling Github API...');
        callback(['repo1','repo2','repo3']);
    },2000);   
}

// Do the promise 
function getCommits(userrepo){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Calling Github commit API...');
            resolve(['commit1','commit2','commit']);
        },2000);   
    });
}