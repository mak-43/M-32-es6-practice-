const numbers=[4,6,8,10]
const output2=[]

// function doubleOld(number){
//     return number*2;
// }

const doubleIt=number=>number*2
for(const number of numbers){
    const result=doubleIt(number)
    output2.push(result)
}
// console.log(output)
//1.loop through each element 
//2.call function by elements for each element
//3. push result in a array result will be stored in an array

// const output=numbers.map(doubleIt)
// const output=numbers.map(number=>number*2)
 const output=numbers.map(n=>n*2)
console.log(output)


const square=numbers.map(x=>x*x)
console.log(square)