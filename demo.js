//Sample

let car1 = "Volvo";
let car2 = "BMW";
let car3 = "Audi";
let cars = ["Volvo", "BMW", "Audi"];
for (let car of cars) {
  console.log(car);
}
let x = 5;
var y = 8.576;
let name = "Akash";
let empID;
let salary = null;
function run() {
  let bar;
  console.log(bar);
  var foo = "Foo";
  bar = "Bar";
  console.log(foo, bar);
  {
    var moo = "Mooo";
    let baz = "Bazz";
    // console.log(moo, baz);
  }
  // console.log(moo);
  // console.log(baz);
}
run();

//Sample
const array = [10, 20, 30, 40];
for (let element of array) {
  console.log(element + 1);
}


// Task Assignment
function arrayDemo() {
const arrays = [3,6,2,7,1];

arrays.sort();
for (let array of arrays){
console.log(array);
}
}
arrayDemo();
