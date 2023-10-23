const arr=["apple","121","aba","cat"]
const ispalindrome=el=>{
    const str=String(el)
    let i=0
    let j=str.length-1
    while(i<j){
        if(str[i]===str[j]){
            i++
            j--
        }
        else{
            return false
        }
    }
    return true
};
const pali=arr=>{
    return arr.filter(el=>ispalindrome(el));
};
console.log(pali(arr));