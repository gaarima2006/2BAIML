//constructor(){
    //console.log("hello constructor");
    //}
    //let h=new hello();
    //let h1=new hello();
//     constructor(name){
//         let empname;
//         this.empname=name;
//         console.log(this.empname);
//     }class hello{
    //cant use let ,kyu??
//     constructor(){
// this.faculty="vikas";
// console.log("hello constructor");
//     }

// let h=new hello();
// console.log(h.faculty);
// class student {
//     constructor(roll,name,year){
//         this.rollno=roll;
//         this.Name=name;
//         this.Year=year;
//         console.log(this.rollno);
//         console.log(this.Name);
//         console.log(this.Year);
//     }
// // }
// // let s1=new student();
// // let s2=new student(101,"garima","2nd");
// // let s3=new student(101,"garima","2nd");
// class student {
//     static fname="garima"
//     static lname="gupta"
//     display()
//     {
//         console.log(student.fname);
//         console.log(student.lname);
//     }
// }
// // student.display();
// let s1=new student();
// s1.display();
// class hello()
// {
//     constructor()
//     {
//         console.log("hello constructor")
//     }
// }
// class hi extends student{
    
// }
// let h1=new hi()
class hello{

    info()
    {
        console.log("info hello")
    }
}
class hi extends hello()
{
    info()
    {
        super.info()
        console.log("info hi");
    }
}
let h1=new hi();
h1.info();