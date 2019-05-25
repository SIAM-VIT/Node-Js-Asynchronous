console.log('Before');

// Using Callbacks
getUser(1,(user)=>{
    getRepositories(user.gitHubUsername,(repos)=>{
        getCommits(repos[0],(commits)=>{
            console.log(commits);
        });
    });
});


// Using Promises
getUser(1)
    .then(user => getRepositories(user.gitHubUsername))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log('Commits',commits))
    .catch(err => console.log('Error',err.message));


console.log('After');



function getUser(id,callback){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Reading a user from a database...');
            callback({id:id,gitUserName:'HrithikMittal'});
        },2000);
    });

}

function getRepositories(username,callback){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Calling Github API...');
            callback(['repo1','repo2','repo3']);
        },2000);
    });
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