// var obj = {name:"kartik"};
// console.log(obj)

// var obj1 = Object.assign({name:"hello"},obj);

// console.log(obj1);

// var totaMark = 100;

// var obj = 
// {
//     name : "kartik",
//     class : 32,
//     marks : 92,
//     checkResult : function()
//     {
//           let per  =    (obj.marks / totaMark)*100;
//          if(per >=60) console.log("PASSED");
//          else console.log("Fail");
//     }
// }

// obj.checkResult();


// function student(fname,marks)
// {
//     console.log(this)  ---> here this will return window
//     return {
//         fname:fname,
//         obtainedMarks:marks,
//         checkResult : function()
//             {
//                   let per  =    (marks / 500)*100;
//                  if(per >=60) return "Passed";
//                  else return "FAIL";
//             }
//     }
// }

// var kartik =student("kartik",400);
// console.log(kartik.checkResult());
// console.log(kartik);  


// kartik.math = 700;

// console.log(kartik);



// ------------------------------------------

// Constructor function

//  function student()
// {
//     console.log(this);
// }

// ------------------- in this case the this refrence to window


// var x =student();

// console.log(x);




function student(fname,marks)
{
    this.name = fname;
    this.mark =marks;
}

var x = new student("kartik",23);

console.log(x);