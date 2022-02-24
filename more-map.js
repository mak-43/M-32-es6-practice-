const friends=['Tom hanks','tom cruise','tom brady','tom solaiman']
const len=[]

//const x=friends.map(l=>len.push(l.length))
//console.log(len)

const products=[
    {name:'water bolttle',price:50,color:'yellow'},
    {name:'mobile-phone',price:10050,color:'black'},
    {name:'smart-watch',price:30050,color:'blue'},
    {name:'sitcky note',price:500,color:'green'},
    {name:'water glass',price:300,color:'white'},

]
//const p=products.map(n=>len.push(n.name))

const productName=products.map(product=>product.name)
console.log(productName)
const productPrices=products.map(product=>product.price)
console.log(productPrices)

// no return
//products.map(p=>console.log(p))//map return an array also iterate items
products.forEach(p=>console.log(p))// has no return ,just iterat items 
