// computer qualities 
// computer
// single responsiblity principle (spr)a class should have one reason to change 
// SPR FOR inputing keyboard. Whatever is in the class should have a purpose to fulfill that purpose. 
var Keyboard = /** @class */ (function () {
    function Keyboard() {
    }
    Keyboard.prototype.inputDatafromKeyboard = function (data) {
        console.log(data);
    };
    return Keyboard;
}());
var Computer = /** @class */ (function () {
    function Computer() {
        //data 
        this.memory = [];
    }
    // methods 
    Computer.prototype.input = function () {
        var inputMethod = new Keyboard();
        inputMethod.inputDatafromKeyboard('data');
    };
    Computer.prototype.storeDatatoMemory = function (data) {
        this.memory.push(data);
        console.log(data);
    };
    Computer.prototype.retrievedataFromInMemory = function (data) {
        this.memory.push(data);
    };
    Computer.prototype.process = function (data) {
        console.log('Processed: ' + data);
    };
    Computer.prototype.displayDataMonitor = function (data) {
        console.log('Displaying: ' + data + 'on monitor');
    };
    Computer.prototype.handleError = function (error) {
        console.log('Error: ' + error);
    };
    return Computer;
}());
// test
var computer = new Computer();
computer.storeDatatoMemory('row data');
