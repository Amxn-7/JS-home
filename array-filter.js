// const marks = [1,3,-2,-3,34,23,43];
// const numbers = marks.filter(function(mark){
//     return mark > 3;
// })
// console.log(numbers)


const products = [
    {
        id: 1,
        name:"Product A",
        price:30

    },
    {
        id: 2,
        name:"Product b",
        price:43

    },
    {
        id: 3,
        name:"Product c",
        price:54

    },
]
const expensiveproducts = products.filter(product => product.price==54);
console.log(expensiveproducts)