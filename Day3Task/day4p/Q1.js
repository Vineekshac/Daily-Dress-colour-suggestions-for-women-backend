let obj1  = { name: 'Person 1',age:5 };
let obj2 = { age:5 ,name: 'Person 1'};
function sortObject(obj){
    return Object.keys(obj).sort().reduce((result,key)=>{
        result[key]=obj[key];
    return result;
    },{});
}
function compareObjects(obj1,obj2){
    return JSON.stringify(sortObject(obj1))===JSON.stringify(sortObject(obj2));
}
console.log(compareObjects(obj1,obj2));