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

// function createCounter() {
//     let counter = 0;
//     const myFunction = function() {
//     counter = counter + 1;
//     return counter;
//     };
//     return myFunction;
// }
// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();
// console.log('example increment', c1, c2, c3);

// let mass = [1,2,3,4,5,6,7];
// for (key in mass){
//     console.log(mass[key]);
// }


// var fruits = ['Яблоко', 'Банан'];
// var newLength = fruits.push('Апельсин');
// var pos = fruits.indexOf('Банан');
// var removedItem = fruits.splice(pos, 1); // так можно удалить элемент
// var shallowCopy = fruits.slice(); // так можно создать копию массива
// var shallowCopy2 = fruits; // так можно создать копию массива


// fruits.forEach(function(item, index, array) {
//     console.log(item, index);
//   });

//   console.log(shallowCopy);  
//   console.log(shallowCopy2);

var board = [
    ['R','N','B','Q','K','B','N','R'],
    ['P','P','P','P','P','P','P','P'],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    ['p','p','p','p','p','p','p','p'],
    ['r','n','b','q','k','b','n','r'] ];
  
  console.log(board.join('\n') + '\n\n');
  
  // Двигаем королевскую пешку вперёд на две клетки
  board[4][4] = board[6][4];
  board[6][4] = ' ';
  console.log(board.join('\n'));

console.log(5 + +"5");
console.log(typeof(5 + +"5"));
console.log(typeof(parseInt('12')));
console.log("123"[2]);
