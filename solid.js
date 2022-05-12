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
var InMemory = /** @class */ (function () {
    function InMemory() {
        this.memory = [];
    }
    InMemory.prototype.store = function (data) {
        this.memory.push(data);
    };
    InMemory.prototype.retrieve = function (data) {
        this.memory.push(data);
    };
    return InMemory;
}());
var CPU = /** @class */ (function () {
    function CPU() {
    }
    CPU.prototype.process = function (data) {
        var information = 'Processed: ' + data;
        return information;
    };
    return CPU;
}());
var Monitor = /** @class */ (function () {
    function Monitor() {
    }
    Monitor.prototype.display = function (data) {
        console.log('Displaying: ' + data + 'on monitor');
    };
    return Monitor;
}());
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    ErrorHandler.prototype.handleError = function (error) {
        console.log('error: ' + error);
    };
    return ErrorHandler;
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
    Computer.prototype.store = function (data) {
        // Delegate 
        var inMemory = new InMemory();
        inMemory.store(data);
    };
    Computer.prototype.retrieve = function (data) {
        var inMemory = new InMemory();
        return inMemory.retrieve;
    };
    Computer.prototype.process = function (data) {
        var processor = new CPU();
        processor.process(data);
    };
    Computer.prototype.display = function (data) {
        var monitor = new Monitor();
        monitor.display(data);
    };
    Computer.prototype.handleError = function (error) {
        var errorHandler = new ErrorHandler();
        errorHandler.handleError(error);
    };
    return Computer;
}());
// test
var computer = new Computer();
computer.process('fffff');
