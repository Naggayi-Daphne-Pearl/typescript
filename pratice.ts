// Declaring variables in typescript 
let k =1 
function test() {
    let c = 1
    return k++
    
}
test()
console.log(test());
console.log(test())

// Undefined: the value returned will be undefined. The if-block has the variable which gets executed when I> 0. Over here the if-block is not expected but you are still having a reference to the variable t, and it returns undefined, this is because var defined variables once defined inside a function will have reference to it inside the function. 
var i = 0;
function tests() {
    if (i>0) {
      var t = 1;
    }
    return t;
}
console.log(tests())    

/* Here are some important methods which can be used on Number types:
    toFixed() – it will convert the number to a string and will keep decimal places given to the method.

    toString() – this method will convert number to a string.

    valueOf() – this method will give back the primitive value of the number.

    toPrecision() – this method will format the number to a specified length.*/

/* Here are some important methods which can be used on String types:
    split() – this method will split the string into an array.
    charAt() – this method will give the first character for the index given.
    indexOf() – this method will give the position of the first occurrence for the value given to it.
    Replace () – this method takes 2 strings, first the value to search in the string and if present will replace it will the 2nd one and will give a new string back.
    Trim () – this method will remove white spaces from both sides of the string.
    substr() – this method will give a part of the string which will depend on the position given as start and end.
    substring() – this method will give a part of the string which will depend on the position given as start and end. The character at the end position will be excluded.
    toUpperCase() -will convert the string to uppercase
    toLowerCase() – will convert the string to lowercase.*/

/* An array 
    Synatax of an array
    let nameofthearray : Array<typehere> e.g 
    let years: Array<number> = [2015, 2016, 2017, 2018, 2019]; //array will all numbers*/

/* 
Defining a class in typescript
    class nameofclass {
     //define your properties here

    constructor() {
     // initialize your properties here
    }
 
   //define methods for class
}
e.g
    class Students {
    age : number;
    name : string;
    roll_no : number;
    
    constructor(age: number, name:string, roll_no: number) {
        this.age = age;
        this.name = name;
        this.roll_no = roll_no;
    }

    getRollNo(): number {
        return this.roll_no;
    }

    getName() : string {
        return this.name;
    }
*/