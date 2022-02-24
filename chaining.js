//destructuring array
const [p,q]=[22,33,44,55]
console.log(p,q)
const [a,b]=['mak','rio']
console.log(a,b)
//chaining
const company={
    name:'GP',
    ceo:{id:1,name:'ajmol',food:'fucka'},
    web:{
        work:'website development',
        employee:22,
        framwork:'react',
        tect:{
            first:'html',
            second:'js'
        }
    }
}
console.log(company?.web?.tech?.third)