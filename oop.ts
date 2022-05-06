class Customer {
    // data/ attribute
    private name:string
    private address:any
    // operators/ methods/behaviours that operate on data
    constructor(name:string, address:string){
        this.name = name; 
        this.address = address;
    }
    // //method signature
    // concatenateName(firstName:string, lastName:string):string{return this.name}
}

// // concatenate // escapulation 
// class Student {
//     firstName = 'nagayi'; 
//     lastName  = 'daphne'; 

//     public concatenate () {
//         return this.firstName + this.lastName
//     }
// }
// console.log(concatenate(firstName, lastName));


class Payment {
    private amount: any
    pay() {
        console.log('generic payment');
        
    }

}

// inheritance relationship 
// cash inherits all public variables in payment
class Cash extends Payment{
    private cashTendered: any
}

class Check extends Payment {
    private name: string
    private bankID: string
}

class Credit extends Payment {
    authorized: any
    number: string
    type: string
    expDate: Date 
}

let pm1 = new Cash (); 
pm1.pay()