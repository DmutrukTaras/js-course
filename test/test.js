// 'use strict';


// var a=5;
// console.log(a);

// var leftBorderWhite = 1;
// let second = 2;
// const pi = 3.14;


// //let answer = confirm ("Are you here?");
// var arr = ['1','2','3'];
// console.log(typeof(arr));

// (second == 3)? console.log("yes 3"):(second==2)?console.log("yes 2"):console.log("no");

function createCounter() {
    let counter = 0;
    const myFunction = function() {
    counter = counter + 1;
    return counter;
    };
    return myFunction;
}
const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log('example increment', c1, c2, c3);