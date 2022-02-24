const fish={id:58,name:'king hilsha',price:9000,phone:'017555555555',address:'chandpur',dress:'silver'};
// const phone=fish.phone
// const dess=fish.dess
// const id=fish.id
///destructuring
const {phone,dess,id,price}=fish
console.log(phone)
console.log(id)

const company={
    name:'GP',
    ceo:{id:1,name:'ajmol',food:'fucka'},
    web:{work:'website development',employee:22,framwork:'react'}
}
// const work=company.web.framwork;
const ceo=company.ceo.name
const {work,framwork}=company.web

console.log(work,framwork)