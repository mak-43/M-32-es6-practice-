// const numbers=[5,13,7,79,30,5,2,19]
// const bigNumbers=numbers.filter(number=>number>20)
// console.log(bigNumbers)
const products=[
    {name:'water bolttle',price:50,color:'yellow'},
    {name:'mobile-phone',price:10050,color:'black'},
    {name:'smart-watch',price:30050,color:'blue'},
    {name:'sitcky note',price:500,color:'black'},
    {name:'water glass',price:300,color:'white'},

]
const expensv=products.filter(p=>p.price>1000)//ekta condition fullfill korle full emelements  k arrae kore dibe retun
const color=products.filter(p=>p.color=='black')

const white=products.find(p=>p.color=='yellow')//direct emelents dibe
console.log(white)