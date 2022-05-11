// computer qualities 



// computer
// single responsiblity principle (spr)a class should have one reason to change 
// SPR FOR inputing keyboard. Whatever is in the class should have a purpose to fulfill that purpose. 
class Keyboard {
    inputDatafromKeyboard(data:any) {
        console.log(data);
        
    }
}
class InMemory{
    memory: Array<any> = []
    
    store(data:any){
        this.memory.push(data)
    }
    retrieve (data:any) {
        this.memory.push(data)
    }

}
class CPU {
    process(data:string){
        let information = 'Processed: ' + data 
        return information
    }
    
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
    // methods 
    input() {
        let inputMethod = new Keyboard(); 
        inputMethod.inputDatafromKeyboard('data')
        
    }
    store(data:any){
        // Delegate 
        let inMemory = new InMemory()
        inMemory.store(data)       
        
    }
    retrieve(data:any) {
        let inMemory = new InMemory();
        return inMemory.retrieve
       
        
    }
    process(data:any) {
        let processor = new CPU(); 
        processor.process(data)
        
    }
    display(data:any) {
       let monitor = new Monitor(); 
       monitor.display(data) 
        
    }
    handleError(error:any) {
        let errorHandler = new ErrorHandler();  
        errorHandler.handleError(error)
        
    }
}





// test
let computer = new Computer(); 
computer.process('fffff')