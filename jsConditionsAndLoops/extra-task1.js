// Extra task
// Create a method to see whether the string is ALL CAPS


const string = 'HELLO';
// const string = 'HELLO Hello';
// const string = 'hello';

function isStringUpperCase (str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i].toUpperCase()){
      return false;
    }
  }
  
  return true;
}

console.log(isStringUpperCase(string));
