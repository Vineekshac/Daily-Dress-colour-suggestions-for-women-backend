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

// let student1={firstname:"Xyz",lastname:"Abc",rollno:21};
// let student2=student1;
// student2.rollno=24;
// console.log(student1);
// console.log(student2);//pass by reference



// function reverse_a_number(n)
// {
// 	n = n + "";
// 	return n.split("").reverse().join("");
// }
// console.log(Number(reverse_a_number(32243)));


// program to count the number of vowels in a string

// function countVowel(str) { 

//     const count = str.match(/[aeiou]/gi).length;

//     return count;
// }

// const result = countVowel("Apple");

// console.log(result);

// function reverseNum(num){
//   var reverse=0;
//   while(num!=0){
//     reverse=reverse*10;
//     reverse=reverse+num%10;
//     num=Math.trunc(num/10);
//   }
//   return reverse;
// }
// console.log(reverseNum(123))

// let a=[];
// a.push("john","doe",46)
// console.log(a);

// const student="rahul";
// const rollno=20;
// const clas=7;
// const obj={student,rollno,clas}
// console.log(obj)

// let num=4
// let i=0
// //console.log("hello this is "+num+" and this is "+i)
// console.log(`hello this is  ${num} and this is ${i}`)  //template returns



//Arrow function
//(...args)=>{function body goes here}
//we can assign arrow to a variable

//this is one method
// function abc(...args){
//   console.log(args)
// }
// abc(4,2)

//arrow funct example

//map((i)=>{console.log(i)})

// let a=(...args)=>{
//   console.log(args)
// }
// a("hello","world")


// let square=(num)=>{
//   return num*num
// }
// console.log(square(4))


// let fetchRes=fetch("https://jsonplaceholder.typicode.com/todos/1");
// fetchRes
//     .then((res)=>res.json())
//     .then((data)=>{
//         console.log(data);
//     });

