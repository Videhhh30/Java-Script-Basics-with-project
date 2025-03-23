const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));

/* [ Strings in JS ]
- strings can be donated by ' or "
- to concatenate we can use 
- back tick (sting interpolations)
e.g `hello ${name}`
- sting is object but it has length property
- it can be access as
e.g stringName[0]
- stringName._proto_
- stringName.toUpperCase()
- stringName.charAt()
- stringName.indexAt()
- stringName.substing(0,4) can have -ve value
- stringName.slice(-7,4) can have -ve value
- stringName.trim() , .trimStart(), .trimEnd()
- stringName.replace('what to search', 'what to replace with')
- stringName.includes('name')
- stringName.split('sepater','limit')
- search for small() yourself 
*/