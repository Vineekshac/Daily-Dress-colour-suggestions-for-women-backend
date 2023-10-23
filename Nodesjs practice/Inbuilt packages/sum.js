console.log("Hello")

// const double =(num)=>num*2;

// console.log(double(10));

// //console.log(global);

// console.log(process.argv)
//console.log(process.argv[0]);
//console.log(process.argv[1]);

//process.argv using to get arguments passed to the node.js process when run in the command line
// (first 2 parameters are default and other we are passing)

/*const[, ,n]=process.argv;
const double =(num)=>num*2;
console.log(double(n));*/

const add=(n1,n2)=>n1+n2;
const[,,n1,n2]=process.argv;
console.log(add(+n1,+n2));
