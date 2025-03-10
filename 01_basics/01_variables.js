const accountId = 144534;   // constant cannot be changed
let accountEmail = "videh@google.com";
var accountPassword = "123456";
accountCity = "jaipur";
let accountState

console.table({ accountId, accountEmail, accountPassword, accountCity, accountState });
// prefer not to use var (bcoz of issue in block scope and functional scope)