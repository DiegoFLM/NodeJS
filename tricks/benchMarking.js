console.time('all');

let sum = 0;

console.time('loop');
for(let i = 0; i < 10000000; i++) {
    sum += i;
}
console.timeEnd('loop');


console.time('loop2');
for(let i = 0; i < 100000000; i++) {
    sum += i;
}
console.timeEnd('loop2');

console.time('async');
console.log('start async');

asyncFunction().then(() => {
    console.timeEnd('async');
}); 


console.timeEnd('all');

function asyncFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Async Hello World');
            resolve('Async resolved');
        });
    });
}