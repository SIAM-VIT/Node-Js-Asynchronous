console.log('Before');
getUser(1,(user) => {
    console.log('user',user);

    // Get the repositories
    getRepositories(user.gitUserName,(repos)=>{
        console.log('Repos',repos);

        // Get the commits
        getCommits(repos,(commits)=>{
            console.log('Commits',commits);
        })
    });
});
console.log('After');

// Ways to get result of Async Opperation
// 1.Callbacks
// 2.Promises
// 3.Async/await

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

function getCommits(userrepo,callback){
    setTimeout(()=>{
        console.log('Calling Github commit API...');
        callback(['commit1','commit2','commit']);
    },2000);   
}