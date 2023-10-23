let num=[2,3,5,6,7,8,9]
num=num.filter(Number=>{
    for(let i=2;i<=Math.sqrt(Number);i++){
        if(Number%i==0) return false;
    }
    return true
});
console.log(num)