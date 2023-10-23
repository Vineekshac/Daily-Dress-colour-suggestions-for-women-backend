// // name a variable as abcd and store a string name as abcd in it
// // name a variable as num and store -10 in it
// // name a object student and store his first name, last name and roll no. to be rahul Sen 41
// // make an array name it arr and store the numbers from  5 to 10 in it

// let abcd="abcd"
// let num=-10;
// let student={"firstname":"rahul","lastname":"sen","rollno":41}
// let arr = [5,6,7,8,9,10]

// console.log(student)
// console.log(arr)

// let a =10;
// let b=a;
// console.log("a is before changing a "+a)
// console.log("b is before changing a "+b)
// a=20
// b=a
// console.log("a is after changing a "+a)
// console.log("a is after changing a "+b)

// let a = ["apple", "mango"];
// let b = a;
// console.log(a);
// console.log(b);
// b[0] = "pineapple";
// console.log(a);
// console.log(b);

//declare a object named as student 1 store its 1st name ,last name and roll no, make a new object student 2
// assign the values of student 1 in it and change the roll no of student2 and console log both the objects

// a function that will take an array and will print the elements in the array

// function abc(arr){
//     for(let i=0;i<arr.length;i++){
//         console.log(arr[i])
//     }
// }

// let arr=[8,5,2]
// abc(arr)
// abc([1,2,3])

// var y="hello";
// {

//     console.log(y)
// }
// console.log(y)

// var a="p";
// console.log(a);
// {
//     console.log(a);
//     var p="o";

// }
// console.log(p)
// function abc(){
//     console.log(a)
// }
// abc()

// function greater(a,b){
//     return a>=b?a:b
// }

// console.log(greater(3,3))



// import fetch from "node-fetch";
// let fetchRes = fetch("https://jsonplaceholder.typicode.com/todos/1");
// fetchRes
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

// function multiplyAll(...args) {
//     let result = 1;
//     for (let arg of args){
//       result *= arg;
//     }
//     return result;
//   }
//   console.log(multiplyAll(1)); // 1
//   console.log(multiplyAll(1, 2)); // 2
//   console.log(multiplyAll(1, 2, 3)); // 6
//   console.log(multiplyAll(1, 2, 3,4,5,6,9,8,7,2)); // 6


// function welcomeSite(siteName, bookName, ...bookTitles) {
//     console.log(' Welcome to ' + siteName + '-' + bookName + ' book' ); 

//     console.log(bookTitles[0]); 
//     console.log(bookTitles[1]); 
//     console.log(bookTitles.length); 
//   }
//   welcomeSite("W3Docs", "JS", "Arrays", "Functions");

//   let arr1 = [2, -3, 5, 4];
// let arr2 = [9, 2, -7, 2]; 
// console.log(Math.max(...arr1, ...arr2));

// make an empty array and add "john" "doe" 46

// var arr1=["ahsbc","sahc","sjc"]
// var arr2=["doe",46]

// console.log(...arr1)
// console.log(arr2)


// let arr=["hello","world","hi","rahul"]
// let [k,,i,]=arr
// console.log(k)
// console.log(i)


// let arr1=[1,2,3,4,5,6,7,8]
// console.log(arr1[2])
// let [,,o,]=arr1
// console.log(o)


// let [,pronoun,,p] = ["Hello", "I" , "am", "Sarah"];

// console.log(pronoun)
// console.log(p)

// let person = {n: "Sarah", country: "Nigeria", job: "Developer"};

// let {n:i,country:c,job:j}=person

// console.log(i,c,j)


// const object1 = { a: 'foo', b: 42, c: {j:"hello",p:"world"} };
// const a = 'foo';
// const b = 42;
// const c = {};
// const object2 = { a: a, b: b, c: c };
// const object3={a,b,c}
// console.log(object3)


// object {"student":"rahul","rollno":20,"class":7}

// const student="rahul"
// const rollno=20
// const Clas=7
// const obj={student,rollno,Clas}
// console.log(obj)



// num=4, i=0 , hello this is 4 and this is 0  

// let num=4
// let i=0
// console.log(`Hello this is ${num} and this is ${i}`)


// function reverseNum(num) {
    //     var reverse = 0;
    //     while(num != 0)
    //     {
        //       reverse = reverse * 10;
        //       reverse = reverse + num%10;
        //       num = Math.trunc(num/10);
        //     }
        //     return reverse;
        //   }
        
        //   console.log(reverseNum(123))
        //   console.log(reverseNum(5872))





//Arrow function
// (...args) => { function body goes here }
// We can assign arrow to a variable

// function abc(...args){
//     console.log(args)
// }

// abc(4,2)


// let a = (...args)=>{
//     console.log(args)
// }
// a("hello","world")


// write a function to return the sqaure of number 


// const sqaure = (num)=>{
//     return num*num
// }

// console.log(sqaure(4))



// let arr=["hello","johnm","morning"]
// // ["Hello","John","Morning"]


//map((i)=>{console.log(i)})



// let car={
//     brand:"mercedes",
//     model:"2102",
//     color:"white",
//     functionality:function(brand){  
//         console.log(`Welcome to ${brand}`)
//     },
//     calling:function(){this.functionality("audi")}
// }

// car.calling()


// inside arrow we cannot use this keyword it will throw an error
// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };

  


//this keyword to invoke the properties and use it in the functionality -- this keyword


// make a nested object student having key as name which is an object inb iteself having first name and last name , 
//write a function object student to access the 1st name and print it

// let student={
//     namee:{
//         fname:"Ayush",
//         lname:"sen",
//     },
//     func:function (){console.log(this.namee.fname)}
// }

// student.func()


// class car{
//     namee
//     model
//     color
//     constructor(n,m,c){
//         this.namee=n
//         this.model=m
//         this.color=c
//     }
// };

// let car1=new car("Audi","2021","white")
// let car2=new car("mercedes","5054","black")
// console.log(car1)
// console.log(car2)

// task -- create a class name as student having keys name rool no. standard and create two students using this class


// class student{

//     constructor(n="sakshi",roll_no=5,standard=8){
//         this.namee=n
//         this.roll_no=roll_no
//         this.standard=standard
//     }

//     abc(){
//         console.log(`${this.namee} is studying`)
//     }


// };

// let student1=new student("rahul","1","7")
// let student2=new student("Pihul","2","7")
// let student3=new student("rakesh","5","5")
// let student4=new student()
// student4.abc()
// console.log(student4,student1,student2,student3)
// student4.namee="Ayush";
// console.log(student4)
// student4.abc()




// console.log(student1.namee)
// console.log(student2.namee)

// rahul and pihul


// setter and getter 
// functionality inside class 


// create a class name it as phone which will have brand,model,year of manufacture 
//create 2 phones using this class
//add a functionality to the class to calculate the age of the phone.
//display the <phonne name> - age is <calculated age>


// class phone{
//     constructor(b,m,y){
//         this.brand=b
//         this.model=m
//         this.yearofm=y
//     }
//     age(){
//         let a=2023-this.yearofm
//         console.log(`${this.brand} age is ${a}`)
//     }
// };

// let p1=new phone("redmi","note 12","2021")
// let p2=new phone("iphone","13 pro","2008")
// p1.age()
// p2.age()
// console.log(p1,p2)



class Person {
    constructor(name) {
        this.setName(name);
        
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }
}

let person = new Person('Jane Doe');
console.log(person); 
console.log(person.getName())

class Persons {
    constructor(name) {
        this.name=name
        
    }
}
let p=new Persons("rakesh")
console.log(p.name)


// person.setName('Jane Smith');
// console.log(person.getName());




