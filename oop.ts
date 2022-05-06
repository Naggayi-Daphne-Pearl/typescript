class Customer {
    // data/ attribute
    private name:string
    private address:any
    // operators/ methods/behaviours that operate on data
    constructor(name:string, address:string){
        this.name = name; 
        this.address = address;
    }
    //method signature
    concatenateName(firstName:string, lastName:string):string{return this.name}
}

// Instaniate a class




// // concatenate // escapulation 
// class Student {
//     firstName = 'nagayi'; 
//     lastName  = 'daphne'; 

//     public concatenate () {
//         return this.firstName + this.lastName
//     }
// }
// console.log(concatenate(firstName, lastName));
