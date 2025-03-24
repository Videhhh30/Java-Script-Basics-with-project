// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
/* 
[ date and time ] (I know following code is a mess but will try to give a consice note on date)
JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).
Note: TC39 is working on Temporal

let myDate = new Date() 
console.log(myDate); // 2024-01-04T07:35:09.154Z
console.log(myDate.toString()); // Thu Jan 04 2024 07:35:09 GMT+0000 (Coordinated Universal Time)
console.log('dateString '+ myDate.toDateString()); // dateString Thu Jan 04 2024
console.log('isoString '+ myDate.toISOString()); // isoString 2024-01-04T07:35:09.154Z
console.log('JSON '+ myDate.toJSON()); // JSON 2024-01-04T07:35:09.154Z
console.log('LocaleDateString '+ myDate.toLocaleDateString()); // LocaleDateString 1/4/2024
console.log('LocaleString '+ myDate.toLocaleString()); // LocaleString 1/4/2024, 7:35:09 AM
console.log('LocaleTimeString '+ myDate.toLocaleTimeString()); // LocaleTimeString 7:35:09 AM

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log('dateString '+ myDate.toDateString());
console.log('isoString '+ myDate.toISOString());
console.log('JSON '+ myDate.toJSON());
console.log('LocaleDateString '+ myDate.toLocaleDateString());
console.log('LocaleString '+ myDate.toLocaleString());
console.log('LocaleTimeString '+ myDate.toLocaleTimeString());

myDate 2024-01-04T07:35:09.154Z
String Thu Jan 04 2024 07:35:09 GMT+0000 (Coordinated Universal Time)
dateString Thu Jan 04 2024
isoString 2024-01-04T07:35:09.154Z
JSON 2024-01-04T07:35:09.154Z
LocaleDateString 1/4/2024
LocaleString 1/4/2024, 7:35:09 AM
LocaleTimeString 7:35:09 AM

// creating a custom date (months start from 0)
let myCreatedDate = new Date(2023, 0, 23) // Mon Jan 23 2023
let myCreatedDate = new Date(2023, 0, 23, 5, 3) // 1/23/2023, 5:03:00 AM
let myCreatedDate = new Date("2023-01-14") // YYYY-MM-DD month start from 1
let myCreatedDate = new Date("01-14-2023");
// MM-DD-YYYY console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp); // milli seconds passed from January 1, 1970
console.log(myCreatedDate.getTime()); // returns time in milliseconds
console.log(Math.floor(Date.now()/1000)); // returns time in seconds

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1); // starts from 0
console.log(newDate.getDay()); // starts from monday

`${newDate.getDay()} and the time ` use back ticks to create full date and time

newDate.toLocaleString("default", {
  weekday: "long",
}); */