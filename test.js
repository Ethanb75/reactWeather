//below is a promise example

function adder(a,b){
    return new Promise(function(resolve,reject){
        resolve(a + b);
        reject('error');
    })
}
adder(2,3).then(function(answer){
        console.log('the answer is: '+ answer);
    }, function(err) {
        console.log(err);
    }
);