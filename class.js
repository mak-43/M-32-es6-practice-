class Support{
    name;
    designation='support web dev';
    address='BD'
    constructor(name,address){
        this.name=name;
        this.address=address
    }
    startSession(){
        console.log(this.name,'start a support session')
    }
}
const amir=new Support('amir','india');
const salman=new Support('salman','aus');
console.log(amir)
console.log(salman)
amir.startSession()
salman.startSession()