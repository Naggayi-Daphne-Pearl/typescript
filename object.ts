/* CREATING OBJECTS in javascript/typescript
- OBJECT LITERAL
- USING FACTORY FUNCTION 
- USING CONSTRUCTOR FUNCTION 
- USING CLASS*/

// creating objects literally
// let customer1:object = {name: 'John Doe', address:'New york'}
// let customer2:object = {name: 'Jane Doe', address:'Nasana'}
// let customer3:object = {name: 'Pearl', address:'Kabaale'}

// creating objects using factory function/ constructor 
// 1. Defining the template/blueprint
// any/unknown means any type. usually used when we dont know the type of object 
// function customer(name:string, address:string):object{
//    return{name:name, address:address}  
// }

// // 2. Creating Objects 
// // advantages of creating objects using constrcutor method is that it avoids code duplication. 
// let customer1:object = {name: 'John Doe', address:'New york'}
// let customer2:object = {name: 'Jane Doe', address:'Nasana'}
// let customer3:object = {name: 'Pearl', address:'Kabaale'}
// let customer4:object = {name: 'Jane', address:'Kampala'}




// using constructor method 
function Jumiacustomer(name:string, address:string){
   this.name = name; 
   this.address = address;   
}

let customer1:object = new Jumiacustomer('John Doe','New york')
let customer2:object = new Jumiacustomer('Jane Doe', 'Nasana')
let customer3:object = new Jumiacustomer('Pearl','Kabaale')
let customer4:object = new Jumiacustomer('Jane','Kampala')

customer1 ['firstname'] = 'Naggayi'
console.log(customer1['firstname']);

