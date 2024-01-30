let number=[1,2,3,4,5];
let fruit=['apple','banana','orange'];
let mixedarray=[1,'two',{name:'Alice'},[7,8,9]];

let firstNumber= number[0];
let secondFruit=fruit[1];
let thirdElement=mixedarray[2];

console.log(firstNumber);
console.log(secondFruit);
console.log(thirdElement);

number.push(6);
fruit.pop();
fruit.unshift('pear');
number.shift();

number.forEach( function(number){
    console.log(number);
});

let doublenumber=number.map(function(number){
    return number*2;
});

number.forEach( function(number){
    console.log(doublenumber);
});

const numbers=[1,2,3,4,5];
const even=numbers.filter(function(num){
    return num%2===0;
});

console.log(even);