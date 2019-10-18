//Challenge 1 : Longest Word
//Return the longest word of a string
//if more than one longest word, put it into an array
//example : longest word ('hey there my name is muhammed') === 'muhammed'
//example : longest word ('hi my name is muhammed ogunsanya') === ['muhammed', 'ogunsanya']




//match() takes in a regEx and returns a filtered array based on the regEx
const longestWord = (sen) =>{
    //filtered array
const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

const sorted =wordArr.sort((a,b) => b.length - a.length);
//single longest word
// return sorted[0];

//multiple longest words
const longestWordArr = sorted.filter(word => word.length === sorted[0].length);

//more than one longest words
if (longestWordArr.length===1) {return longestWordArr[0];}
else{return longestWordArr;}

}



//Challenge 2 : Array Chunking
//split an array into chunked arrays of specific length
//example: ([1,2,3,5,6,7,8,9,10],3) ===[[1,2,3], [4,5,6] [7,8,9], [10]]
const chunkArray = (arr, len) =>{
//init Chunked Array
const chunkedArr = [];

//Loop through array
arr.forEach(val => {
    //get last element
    const last = chunkedArr[chunkedArr.length - 1];

    //check if last and its length = chunk len
    if (!last ||last.length ===len) {chunkedArr.push([val]);}
    else {last.push(val);}
});

return chunkedArr;

}


//Challenge 3 : return Flatten array
//Take an array of arrays and flatten them into a single array
//example : ([1,2], [3,4], [5,6], [7,8]) === [1,2,3,4,5,6,7,8]
const flattenArr = arr => [].concat(...arr);
  
//Challenge 4 : Anagrams
//Return true if anagram return false if not
//example : 'listen' === 'silent'
//replace() Replaces text in a string, using a regular expression or search string
// and A string containing the text to replace for every successful match of searchValue in this string.
const isAnagram = (str1,str2) => {
return formatStr(str1) === formatStr(str2)
}

//Helper Func.
const formatStr = str =>{
    return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

//Challenge 5 : Letter Change
//change every letter of the string to the letter that follows it and capitalize the vowels
//example : 'i love coding' === 'j mpwf dpEjmh '
//if you get to Z, Z return A

const letterChanges = str => {
 let newStr = str.toLowerCase().replace(/[a-z]/gi, char =>{
     
     if (char ==='z' || char==='Z') {return 'a'}
     else{return String.fromCharCode(char.charCodeAt() + 1)}

 });

 newStr = newStr.replace(/a|e|i|o|u/gi ,vowel => vowel.toUpperCase());
 return newStr

}

const output = letterChanges ('i love coding');
console.log(output)