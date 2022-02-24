const bou='romana'
let phone='iphone 15'
phone='xiomi'
console.log(phone)
//template string
const myNotes=`hello
this is my brand it's my fav
${bou} and phone is ${phone}`
console.log(myNotes)
//default parameter
function maxNum(array=[]){
    const max=Math.max(...array)
    return max
}
const biggest=maxNum([2,3,4])
console.log(biggest)
//arrow function
const square= x=> x*x
console.log(square(8))
