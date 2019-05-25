console.log('Before');
const user = getUser(1);
console.log(user);
console.log('After');

// Ways to get result of Async Opperation
// 1.Callbacks
// 2.Promises
// 3.Async/await
function getUser(id){
    setTimeout(()=>{
        console.log('Reading a user from a database...');
        return{id:id,gitHubUsername:'HrithikMittal'}
    },2000); 

    return 1;
}