// computer qualities 



// computer
// single responsiblity principle (spr)a class should have one reason to change 
// SPR FOR inputing keyboard. Whatever is in the class should have a purpose to fulfill that purpose. 
class Keyboard {
    inputDatafromKeyboard(data:any) {
        console.log(data);
        
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
    storeDatatoMemory(data:any){
        this.memory.push(data)
        console.log(data);
        
    }
    retrievedataFromInMemory(data:any) {
        this.memory.push(data)
        
    }
    process(data:any) {
        console.log('Processed: ' + data);
        
    }
    displayDataMonitor(data:any) {
        console.log('Displaying: ' + data + 'on monitor');
        
    }
    handleError(error:any) {
        console.log('Error: ' + error);
        
    }
}





// test
let computer = new Computer(); 
computer.storeDatatoMemory('row data')