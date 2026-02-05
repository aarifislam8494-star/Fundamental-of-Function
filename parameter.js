function vatkhaw(){
 console.log('hand wash kore aso');
 console.log('boso');
 console.log('plate e khaber dhaber neo');
 console.log('gopat gopat kore khao');
}
// vatkhaw();

/**
 * 3--> 3*3 = 9
 * 4--> 4*4 = 16
 * 5--> 5*5 = 25
 * 11--> 11*11 = 121
*/

function square (number){
   console.log(number);
   console.log('value of the number parameter', number);
   const borgo = number * number;
   console.log('square of the given number is:', borgo);

}

square(4);
console.log('----------------');
square(12);
square(5);
square(405);


// Example
function add(num1, num2){
 const sum = num1 + num2;
 console.log(sum);
}
add(5,10);
add(55,100);
add(55555,145450);
add(55,60);
add(65,10);

// more Example
function addAll(a,b,c,d,e){
 const total = a+b+c+d+e;
 console.log(total);
}
addAll(3,4,5,6,7);
addAll(3,4,5,65,7);
addAll(3,4,1000,6,7);
addAll(3,4,98,6,7);
addAll(3,4,8,10,7);