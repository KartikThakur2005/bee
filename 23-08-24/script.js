class Student
{
     static firstname ;

    constructor (obtainmarks , name)
    {
        this.obtainmarks = obtainmarks;
        this.firstname = name;       
    }
}

var stu1 = new Student(200,"hello");

console.log(stu1.obtainmarks);
var stu2 = new Student(200,"kartik");

console.log(stu1.firstname);
console.log(stu2.firstname);


