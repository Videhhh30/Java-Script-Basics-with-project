console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);
console.log("2" > 1);
console.log("02" > 1);

// we shoul avoid using all these operations 

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); //null <= 0 => true bcz null is converted to 0

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// use of === it will check the datatype also

console.log("2" === 1);

//[Summary]

//- Comparing same datatypes are easy to predict 

//- Don't compare different data types