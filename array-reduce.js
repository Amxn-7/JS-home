// let numbers = [1,43,54,23];
// const sum = numbers.reduce((acc,num) => acc + num , 0);
// console.log(sum)


// let numbers = [1,43,54,23];
// const sum = numbers.reduce((acc,num) => (num > acc ? num:acc), 0);
// console.log(sum)

const fruits = ['banana', 'apple', 'apple' , 'mango', 'banana', 'mango', 'banana']
const sorted = fruits.reduce((acc,fruit)=>{
    acc[fruit] = (acc[fruit]|| 0)+1;
    return acc;
}, {})
console.log(sorted);
