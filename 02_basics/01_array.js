// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6) add element at the last 
// myArr.push(7)
// myArr.pop() remove the last element  

// myArr.unshift(9) add an element at 0 th pos and shift all the element by one place
// myArr.shift()  remove the 0 th pos element

// console.log(myArr.includes(9)); if 9 is included in array or not return boolean result
// console.log(myArr.indexOf(3)); get the element of the following given index

// const newArr = myArr.join() " change to string"

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
/* 
output
A  [ 0, 1, 2, 3, 4, 5 ] normal array
[ 1, 2 ] after slice
B  [ 0, 1, 2, 3, 4, 5 ] normal array after slice
C  [ 0, 4, 5 ] normal array after splice the element used in splice will get removed from the original normal array
[ 1, 2, 3 ] splice will take the last element also */