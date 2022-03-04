const perf = require('execution-time')();

// Sum Zero ------------------------------------------------------ 185.5 μs

function addToZero(arr) {
  let isThereAZero = false;
  let i = 0;

while(i < arr.length) {

  for (let x = arr.length - 1; x > 0; x--){
    if(arr[0] + arr[x] === 0) {
        isThereAZero = true 
      }
    }
    arr.shift();  
 }
return isThereAZero;
}

perf.start();                     
addToZero([1, 2, 3, -2]);
let addToZeroTime = perf.stop()
console.log('zero', addToZeroTime.preciseWords);


// Unique Characters -------------------------------------------------- 52 μs

function hasUniqueChars(word) {
  word = String(word);
 return new Set(word).size === word.length;
}

perf.start();                  
hasUniqueChars("Moonday");
let hasUniqueCharsTime = perf.stop()
console.log('unique', hasUniqueCharsTime.preciseWords);

//Pangram Sentence ---------------------------------------------------- 423.7 μs

function isPangram (str) {
 let uniqueLetters = {}
 let strArr = str.toLowerCase().replace(/[^a-zA-Z]/g, "").split('');

 strArr.forEach(e => uniqueLetters[e] = 1 );
 
 let length = Object.keys(uniqueLetters).length

 if(length === 26) {
   return true
 }
 return false

}

perf.start();                  
isPangram("The quick brown fox jumps over the lazy dog!");
let isPangramTime = perf.stop()
console.log('Pangram', isPangramTime.preciseWords);


//Longest Word ----------------------------------------------------------- 144.8 μs

function findLongestWord (array) {
  let length = 0;
  for(let i = 0; i < array.length; i++) {
    if(array[i].length > length)
    length = array[i].length
  }
  return length
}

perf.start();                  
findLongestWord(["hi", "hello"]);
let findLongestWordTime = perf.stop()
console.log('Longest', findLongestWordTime.preciseWords);