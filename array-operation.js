/**
 * Objective: write a function to give me the sum of all numbers in array
 * step 1: declare a function 
 * step 2: call chek wheater the function is called properly
 * step 3: set a parameter(s)
 * step 4: pass the parameter(s), chek wheter parameter is passed in a proper fromat
 * strp 5: 
*/

function sumOfNumbers(numbers){
 let sum = 0;
 for(const number of numbers){
   console.log(number);
 sum = sum + numbers;

 }
 return sum;

}
const numbs = [54, 62, 12, 6];
const sum = sumOfNumbers(numbs);
console.log('sum of numbers is', sum);