/**
Question 1 Given an array of numbers, write a function that prints in the console another array
which contains all the even numbers in the original array, which also have even indexes only.
○ Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [ 4]
○ Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4]

*/
let evenValues = (arr) => {
  if (!Array.isArray(arr) || arr.length < 1) {
    return "Empty or one element arr";
  }
  const result = arr.filter((element, index) => {
    return index % 2 === 0 && element % 2 === 0;
  });

  return result;
};
console.log(evenValues([0, 1, 2, 3, 4])); //[0,2,4]

/**  
Question 2
● Create a function that takes a two-digit number as an parameter and prints "Ok" in
the console if the given string is greater than its reversed digit version. If not, the
function will print "Not ok"
○ Test 1: reverseCompare(72) prints "ok" because 72 > 27
○ reverseCompare(23) prints "Not ok", because 23 is not greater than 32

*/
const reverseAndCompare = (num) => {
  if (!Number.isInteger(num) || num < 10) {
    return " Pease enter 2 digits number";
  }
  let reversed =
    Number(String(Math.abs(num)).split("").reverse().join("")) * Math.sign(num);

  //console.log(num, reversed)
  return num >= reversed ? "OK" : "Not Ok";
};
console.log(reverseAndCompare(121));
console.log(reverseAndCompare(72)); // ok 72 >27
console.log(reverseAndCompare(-65)); //false -65 > -56
console.log(reverseAndCompare(23));
console.log(reverseAndCompare(7));
console.log(reverseAndCompare(true));
console.log(reverseAndCompare("split"));
console.log(String(-56).split("").reverse().join(""));
console.log(Math.sign(-56)); // -1
console.log(Math.sign(56)); //1
console.log(-65 > -56); //false
console.log(-56 > -65); //true

console.log(Number(String(-65).split("").reverse().join("")));
console.log(Number(String(-65).split("").reverse().join("")));

/**
Question 3
● Write a function that takes a positive integer and returns the factorial of the number.
Notes: The factorial of 0 is 1. Ex: factorial seven is : 1 × 2 × 3 × 4 × 5 × 6 × 7. The
factorial of any positive integer x is x * (x - 1) * (x - 2) * . . . . . . * 1 (ex: factorial of 4 is
4 * 3 * 2 * 1 = 24)
○ Test 1: returnFactorial(5) outputs 120
○ Test 2: returnFactorial(6) outputs 720
○ Test 3: returnFactorial(0) outputs 1

*/

let numFactorial = (num) => {
  if (!Number.isInteger(num) || num < 0) {
    return "Please add valid number";
  }
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    //console.log(factorial, i);
    factorial = factorial * i;
    //console.log(factorial);
  }
  return factorial;
};

console.log(numFactorial(5)); //120
console.log(numFactorial(6)); //720
console.log(numFactorial(0)); //1
console.log(numFactorial(false)); //1
console.log(numFactorial("amele")); //1
//console.log(numFactorial(-4)); //1
console.log(numFactorial(10)); //1

/**Q4 
Question 4 (Meera array)
● A Meera array is defined to be an array containing only numbers as its elements and for
all n values in the array, the value n*2 is not in the array. So [3, 5, -2] is a Meera array
because 3*2, 5*2 or 2*2 are not in the array. But [8, 3, 4] is not a Meera array because
2*4=8 and both 4 and 8 are elements found in the array. Write a function that takes an
array of numbered elements and prints “I am a Meera array” in the console if its array
does NOT contain n and also n*2 as value. Otherwise, the function prints “I am NOT a
Meera array”
○ Test 1: checkMeera([10, 4, 0, 5]) outputs “I am NOT a Meera array” because 5 *
2 is 10
○ Test 2: checkMeera([7, 4, 9]) outputs “I am a Meera array”
○ Test 1: checkMeera([1, -6, 4, -3]) outputs “I am NOT a Meera array” because -3
*2 is -6
*/
let checkMeera = (arr) => {
  let result = arr.some((item) => {
    return arr.includes(item * 2);
  });
  //console.log(result);

  if (result) {
    return "I am Not a Meera array";
  }
  return "I am a Meera array";
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = 0; j < arr.length; j++) {
  //     if (arr[i] * 2 === arr[j]) {
  //       return "I am Not a Meera array";
  //     }
  //   }
  // }
  // return "I am a Meera array";
};
console.log(checkMeera([8, 3, 4]));
console.log(checkMeera([7, 4, 9]));

/**Q5 
Question 5 (Dual array)
● Define a Dual array to be an array where every value occurs exactly twice. For example,
{1, 2, 1, 3, 3, 2} is a dual array.The following arrays are not Dual arrays {2, 5, 2, 5, 5} (5
occurs three times instead of two times) {3, 1, 1, 2, 2} (3 occurs once instead of two
times) Write a function named isDual that returns 1 if its array argument is a Dual array.
Otherwise it returns 0.

*/
let isDual = (arr) => {
  //O(n2)
  if (!Array.isArray(arr)) {
    return "Please enter an array with value";
  }
  if (arr.length % 2 !== 0) {
    return 0;
  }
  let isTwice = arr.every((num) => {
    //1, 2, 1, 3, 3, 2

    let matchVal = arr.filter((value) => {
      return value === num;
    });
    console.log(matchVal);
    return matchVal.length === 2;
  });
  console.log(isTwice);

  return isTwice ? 1 : 0;
};

//console.log(isDual([1, 2, 1, 3, 3, 2]));//
console.log(isDual([2, 5, 2, 5, 5]));
console.log(isDual(1));

/**
Question 6
● Write a function that takes the number of seconds and returns the digital format clock
time as a string. Time should be counted from 00:00:00.
○ Examples: digitalClock(5025) as "01:23:45" 5025 seconds is 1 hour, 23 mins, 45
secs.
■ digitalClock(61201) as "17:00:01" No AM/PM. 24h format.
■ digitalClock(87000) as "00:10:00" It's 00:10 next day.

 */

let calculateHours = (seconds) => {
  if (!Number.isSafeInteger(seconds) || seconds < 0) {
    return "Please enter a valid second  ";
  }
  let secIn24Hrs = seconds % 86400;
  //console.log(secIn24Hrs); //will give you rimainder

  let hrs = Math.floor(secIn24Hrs / 3600);
  let mins = Math.floor((secIn24Hrs % 3600) / 60);
  let sec = secIn24Hrs % 60;
  let hh = String(hrs).padStart(2, "0");
  let mm = String(mins).padStart(2, "0");
  let ss = String(sec).padStart(2, "0");
   console.log(hh, mm, ss );
//return `${hh}:${mm}:${ss}`;
return `${hh}:${mm}:${ss}`;
};
console.log(calculateHours(5025));//
console.log(calculateHours(86499));
console.log(calculateHours(87000));

/**

 */
let arrA = [60, 7, 9, 14];
let arrB = [56, -7, 89, 63];
let arrAMax = Math.max(...arrA); //60
//Math.Max() expects numbers separately, (...) spread operator unpack the array and  pass the elements separately
let arrAMax1 = Math.max(arrA); //NAN array => is not a number
let arrAMin = Math.min(...arrA);
let arrBMax = Math.max(...arrB);
let arrBMin = Math.min(...arrB);
console.log(arrAMax); //60
console.log(arrAMin); //7
console.log(arrBMax); // 89
console.log(arrBMin); //-7

//arrA min > arrB min
//arrB max > arrA Max

/*
DEFINITION1 An algorithm is a finite sequence of precise instructions for performing a computation or for
solving a problem.
=====Pseudo code====
procedure max(a1,a2,...,an: integers)
max := a1
for i := 2 to n
if max <ai then max := ai
return max{max is the largest element}
*/

let findMaxElement = (arr) => {
  /*let max = Math.max(...arr);
  let min = Math.min(...arr);
  console.log(min);
  return max; */
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]; //7, 2, 8, 44, 99, 8, 204, 21, 2 
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};
console.log(findMaxElement([7, 2, 8, 44, 99, 8, 204, 21, 2]));

let arr = [1, 2, 3, 44];
console.log(arr.pop());
console.log(arr.push(32));

let checkIfEndless = (n) => {
  for (let n = 1; ; n++) {
    console.log(n);
    if (n <= 10) {
      break; // this helps to stop endless loop

      console.log(n);
    }
  }

  let j = 0;
  for (;;) {
    console.log("jj", j);
    if (j >= 10) {
      break; //Endless loop happen if you don't use break
    }
    j++;
  }
};
console.log(checkIfEndless(10));
let str = "Amelework";
console.log(str.slice(2, 4));// 'el'
console.log(str.slice(-5, -2));// 'ewo'
console.log(str.slice(-2));// 'rk'
console.log(str.slice(2));// 'elework'
console.log(str.slice(0, 4));// 'Amel'

function findLowCaseCharacter(str) {
  let smallChar = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      smallChar += str[i];
      console.log(smallChar);
    }
  }
  return smallChar;
}
console.log(findLowCaseCharacter("UcUNFYGaFYFYGtNUH"));//'cat'

function Person(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.getName = function () {
    return this.firstName + " " + this.lastName;
  };
}

let person1 = new Person("Fuad", "Al Habesh");
let person2 = new Person("Amele", "Get");

console.log(person2.getName()); // Amele Get
person1.firstName;
console.log(person1.firstName);// Fuad



class Car {
  constructor(model, make, color) {
    this.model = model;
    this.make = make;
    this.color = color;
  }
}
const car1 = new Car("Tesla", "brandNew", "Black");
console.log(car1.model);
let car2;
car2 = car1; //copy by reference
//car2 ={...car1}; // shallow copy => create brand new obj with new memory
console.log(car2);
car2.model = "bmw";
console.log(car1);
console.log(car2);




let student = {
  name: "Amele",
  course: "Algorithm",
  myName() {
    return this.name + ", " + this.course;
  },
};

student.myName();
console.log(student.myName());

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr2.splice(2, 2);
//arr2.splice(2, 3);
//arr2.splice(-1, 1);
console.log(arr2);

/*any Natural number is not divided by any number is prime number
A prime number is any positive number that can only be divided by itself and the number 1.
There are 25 prime numbers up to 100: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97.
*/
const isPrime = (n) => {
  let isPrime = true;
  if (n <= 1) {
    isPrime = false;
  } else {
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) {
        isPrime = false;
        console.log(n, i, isPrime);
      } else {
        isPrime = true;
        console.log(n, i, isPrime);
      }
    }
  }
};
console.log(isPrime(17));

/** loop through the array
check if isPrime true false
.if Prime true rue then collect aad all prime
-compare the sum of prime value to the first value of the array
retur Maguc array if sum=== arr[i]
 */
// let isMagicArray = (arr)=>{
// let sum= 0;
//  for(let i=0; i< arr.length;i++){
// }

// }

//soret an array usingforloop instead of
