//Q1
const findLowerCharacter = (word) => {
  if (
    typeof word !== "string" ||
    word === word.toUpperCase() ||
    word.length < 1
  ) {
    return "Please enter valid string";
  }
  let lowCase = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toLowerCase()) {
      lowCase += word[i];
      console.log(word[i], lowCase);
    }
  }
  return lowCase;
};
console.log(findLowerCharacter("EVAcNGaADIt")); //cat
//console.log(findLowerCharacter("EVANGADI"));
//console.log(findLowerCharacter("E"));

let isNestedArray = (arr1, arr2) => {
  //min(arr1) > min(arr2) && max(arr2) > max(arr1)
  let min1 = Math.min(...arr1);
  let max1 = Math.max(...arr1);
  let min2 = Math.min(...arr2);
  let max2 = Math.max(...arr2);
  let result = min1 > min2 && max2 > max1;
  console.log(result);
  return result ? true : false;
};
console.log(isNestedArray([3, 4, 5], [2, 5, 7, 8]));
console.log(isNestedArray([2, 4, 5, 9], [1, 3, 5, 7, 8]));
console.log(isNestedArray([3, 4, 5], [2, 5, 7, -8]));

//Q3
//check the number is prime
//add all prime numbers in the array
//  sum of prime number equivalent to index 0 value sum===arr[0]
// if its equal return "Magic array" : Not Magic array
let isPrime = (num) => {
  if (!Number.isInteger(num) || num < 2) {
    return  false; //"Please enter a valid number";
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      //console.log(num, i);
      return false;
    }
  }
  return true;
};
//console.log(isPrime(11));

let isMagicArray = (arr) => {
  if (!Array.isArray(arr) || arr.length < 1) {
    return "Please enter an array";
  }
  let sum = 0;
  let prime;
  for (let i = 0; i < arr.length; i++) {
    prime = isPrime(arr[i]);
    //console.log(prime);
    if (prime) {
      sum += arr[i];
      console.log("Prime", arr[i], "Sum", sum);
    }
  }

  if (sum === arr[0]) {
    return "Magic Array";
  }
  return "Not Magic arr";
};
console.log(isMagicArray([21, 3, 7, 9, 11, 4, 6]));
console.log(isMagicArray([13, 4, 4, 4, 4]));
console.log(isMagicArray([0, 6, 8, 20]));
console.log(isMagicArray([3]));
console.log(isMagicArray([10, 5, 5]));
console.log(isMagicArray([8,5,-5,5,3]));


//4
let minMax = (arr) =>{
if(!Array.isArray(arr) || arr.length < 1  ){
    return "enter non empty array"
}
let result =[];
if(arr.every((el)=> Number.isInteger(el))){
 let max = Math.max(...arr);
 let min = Math.min(...arr);

 result.push(min, max);
console.log(result);

}
return  result;
}

console.log(minMax([1, 2, 3, 4, 5])); // [1, 5]

//5
const isFactors = (n) =>{
let factors =[];
if(typeof n !== "number"){
    return "enter only number";
}
 for(let i =1; i <= n; i++){
if(n%i ===0){
factors.push(i)
}
}
return factors
}
console.log(isFactors(12)); //[1,2,3,4,6, 12]
console.log(isFactors(9));//[1,3,9]
 
//Q6
let findHalf = (num) => {
  if (!Number.isInteger(num)) {
    return "Please enter a number";
  }
  let arr = [];
  let left = Math.floor(num / 2);
  let right = Math.ceil(num / 2);
  arr.push(left, right);

  console.log(arr);
  return arr;
};
console.log(findHalf(4));
console.log(findHalf(11));
console.log(findHalf(-7)); // [-4, -3]
console.log(findHalf(7));
