//Q1
const findLowerCharacter = (word) =>{
 if(typeof word !== 'string' || word === word.toUpperCase()|| word.length < 1){
    return "Please enter valid string";
}
let lowCase = "";
for(let i = 0; i < word.length; i++){
  if(word[i] === word[i].toLowerCase()){
     lowCase += word[i];
     console.log( word[i], lowCase);
}
}
 return lowCase;
}
console.log(findLowerCharacter("EVAcNGaADIt"));//cat
//console.log(findLowerCharacter("EVANGADI"));
//console.log(findLowerCharacter("E"));

let isNestdArray = (arr1, arr2) =>{
//min(arr1) > min(arr2) && max(arr2) > max(arr1)
  let min1 = Math.min(...arr1);
  let max1 = Math.max(...arr1);
}



//Q6
let findHalf = (num)=>{
 if(!Number.isInteger(num)){
return "Please enter a number";
}
let arr =[];
let left = Math.floor(num/2);
let right = Math.ceil(num/2);
arr.push(left, right);

console.log(arr);
return arr;

}
console.log(findHalf(4));
console.log(findHalf(11));
console.log(findHalf(-7));// [-4, -3] 
console.log(findHalf(7));