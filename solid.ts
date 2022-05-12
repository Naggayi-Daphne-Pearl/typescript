// computer qualities 



// computer
// single responsiblity principle (spr)a class should have one reason to change 
// SPR FOR inputing keyboard. Whatever is in the class should have a purpose to fulfill that purpose. 
// Dependenct Inversion Policy 


interface InputDevice {
    inputData():any
}
class Keyboard implements InputDevice {
    inputData() {
       return "data"
        
    }
}
interface Memory {
    storeData(data:any):boolean
    retrieveData(basis:any):any
}
class InMemory implements Memory{
    memory: Array<any> = []
    
    storeData(data:any){
        this.memory.push(data)
        return true
    }
    retrieveData (data:any) {
        this.memory.push(data)
    }

}

class CPU {
    process(data:string){
        let information = 'Processed: ' + data 
        return information
    }
    
}
interface DisplayDevice {
    display (data:any)
}
class Monitor {
    display(data:string){
        console.log('Displaying: ' + data + 'on monitor');
    }

}
class ErrorHandler {
    handleError(error:any){
        console.log('error: ' + error);
        
    }
}
class Computer {
    //data 
    memory: Array<any> = []; 
    // this is high level dependecy
    inputDevice:InputDevice; 
    memory:Memory;
    processor:CPU;
    displayDevice:DisplayDevice; 
    errorHandler:ErrorHandler= new ErrorHandler();  
    

    // methods 
    constructor( inputDevice:InputDevice, memory:Memory,   processor:CPU, displayDevice:DisplayDevice ){
       this.inputDevice = inputDevice
       this.memory =  memory
       this.processor = processor
       this.displayDevice = displayDevice 
    }
    input() {
        return this.inputDevice.inputData()
        
    }
    store(data:any){
        this.memory.storeData(data)           
    }
    retrieve(data:any) {
        return this.memory.retrieveData(null)
       
        
    }
    process(data:any) { 
        this.processor.process(data)
        
    }
    display(data:any) {
      
       this.displayDevice.display(data) 
        
    }
    handleError(error:any) { 
        this.errorHandler.handleError(error)
        
    }
}





// test
let computer = new Computer(); 
computer.displayDevice = new Monitor()
computer.process('fffff')