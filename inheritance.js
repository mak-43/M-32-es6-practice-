class TeamMember{
    name;
    address='BD'
    constructor(name,address){
        this.name=name;
        this.address=address
    }
}
class Support extends TeamMember{
    designation='support web dev';
    groupSupportTime;
    constructor(name,addess,time){
        super(name,addess)
        this.groupSupportTime=time
    }
    startSession(){
        console.log(this.name,'start a support session')
    }
}
class StudentCare extends TeamMember{
    designation='Care Web Dev';
    buildAroutine(student){
        console.log(this.name,'build a routine for',student)
    }
}
class NeptuneDev extends TeamMember{
    designation='Neptune Web dev';
    codeEditor;
    constructor(name,addess,editor){
        super(name,addess)
        this.codeEditor=editor
    }

    releaseApp(version){
        console.log(this.name,'release app version',version)
    }
}
const amir=new Support('amir','india',11);
const salman=new Support('salman','aus',12);
const saif=new Support('saif','bd',8);
const ak=new Support('ak','usa',10);

const alia=new StudentCare('alia bhatt','mumbai')
const ash=new NeptuneDev('ash','Mumbai','android studio')
ash.releaseApp('1.4.5')
// console.log(ash)
