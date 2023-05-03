// let x=function (){
//     console.log("geee")
// }

// //is same as

// let z=()=>{
//     console.log("hello");
// }

const obj = {
    firstname: "Prafful",
    class: 10,
    greet: function () { console.log("kaise ho sir") }
}
//acessing property
console.log(obj.firstname)
//acessing method
console.log(obj.greet())
//---------------------------------------

//creatin object using function
//use this here

function Person() {
    this.name = 'john',
        this.age = 23
}
//create object
const person1 = new Person();
//acessing properties
console.log(person1.name);
//useful if u want to create multiple objects of same type 
//like person1 ,person2

// using object literal
let person = {
    name: 'Sam'
}
// using constructor function
function Person() {
    this.name = 'Sam'
}
let person01 = new Person();
let person2 = new Person();
//--------------------------------------

//ARRAY
const words=['hello','world','welcome'];
const words2=new Array('hello','new');
// array with mixed data types
const newData0 = ['work', 'exercise', 1, true];
// You can also store arrays, functions and other objects inside an array. For example,
const newData1 = [
    {'task1': 'exercise'},//object
    [1, 2 ,3],//array
    function hello() { console.log('hello')}//function
];
//array traverse
console.log(words[1]);


// Add an Element to an Array 
//push(),shift()
let dailyA = ['eat', 'sleep'];
		// add an element at the end
		dailyA.push('back add');
		console.log(dailyA); //  ['eat', 'sleep', 'exercise']
        dailyA.unshift('front add')
        console.log(dailyA);
        
//CHANGE or add with INDEX VALUES
        dailyA[4]='adding with index'
        console.log(dailyA);
        dailyA[1]='changing 1 with this'
        console.log(dailyA);

//REMOVING pop or shift()//for forst element
        dailyA.pop();
        console.log(dailyA);

//Length .length
        console.log(dailyA.length);





