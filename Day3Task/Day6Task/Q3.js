class Person
 {
    constructor(Fname,Lname,Age) 
    {
        this.Fname=Fname
        this.Lname=Lname
        this.Age=Age
        this.getFullName=function()
        {
            return this.Fname+" "+this.Lname
        }
        
    }
}
var person1 = new Person('Rita',"Paul",28)
console.log(person1.getFullName(),person1.Age);
