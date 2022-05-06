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
// protected makes the propert private and only accessible in the class Protected
class Cash extends Payment{
    private cashTendered: any
}
// multilevel inheritance is involvement of one or more classes
class Check extends Payment {
    private name: string
    private bankID: string
}
class BlankCheck extends Check {
    authorized: string
}

class Credit extends Payment {
   
    number: string
    type: string
    expDate: Date 
    authorized() {return null}
}

// let pm1 = new Payment(); 
// pm1.amount()


// abstraction hides implementation actions from users
class DigestiveSystem {
    // data
    private food;

    // methods
    public putFoodinMouth(food:string){
        this.ingestion(food)
    }
    
    private ingestion(food:string) {
        this.pelisty(food)
    }
    private pelisty(bolus:string){
        this.absorption(bolus)
    }
    private absorption(xxx:string){
        this.ejection(yyy)
    }
    private ejection(yyy:string){
        this.easeYourSelf()
    }

    public easeYourSelf(zzz: string){
        console.log('long call.. ');
        console.log(zzz);
        
        
    }
}