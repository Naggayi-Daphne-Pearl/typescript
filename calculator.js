/*
Calculator
Addition
Subtraction
Multiplication
Divison
Modulus
Expotential */
// This class will handle addition
var addition = /** @class */ (function () {
    function addition() {
    }
    // method
    addition.prototype.add = function (input1, input2) {
        return input1 + input2;
    };
    return addition;
}());
// This class will handle division
var division = /** @class */ (function () {
    function division() {
    }
    // method
    division.prototype.divide = function (input1, input2) {
        return input1 / input2;
    };
    return division;
}());
// This class will handle multiplication
var multiplication = /** @class */ (function () {
    function multiplication() {
    }
    // method
    multiplication.prototype.multiply = function (input1, input2) {
        return input1 * input2;
    };
    return multiplication;
}());
// This class will handle subtraction
var subtraction = /** @class */ (function () {
    function subtraction() {
    }
    // method
    subtraction.prototype.subtract = function (input1, input2) {
        return input1 - input2;
    };
    return subtraction;
}());
// this class will handle modulus 
var modulus = /** @class */ (function () {
    function modulus() {
    }
    modulus.prototype.modulus = function (input1, input2) {
        return input1 % input2;
    };
    return modulus;
}());
// this class will handle the exponential 
var exponent = /** @class */ (function () {
    function exponent() {
    }
    exponent.prototype.exponent = function (input1, input2) {
        return Math.pow(input1, input2);
    };
    return exponent;
}());
var Calc = /** @class */ (function () {
    function Calc() {
    }
    // methods
    // we are delegating method add from class addition to perform task
    Calc.prototype.add = function (input1, input2) {
        var additionMethod = new addition(); //this is composition
        return additionMethod.add(input1, input2);
    };
    Calc.prototype.divide = function (input1, input2) {
        var divisionMethod = new division();
        return divisionMethod.divide(input1, input2);
    };
    Calc.prototype.multiply = function (input1, input2) {
        var multiplicationMethod = new multiplication();
        return multiplicationMethod.multiply(input1, input2);
    };
    Calc.prototype.subtract = function (input1, input2) {
        var subtractionMethod = new subtraction();
        return subtractionMethod.subtract(input1, input2);
    };
    Calc.prototype.modulus = function (input1, input2) {
        var modulusMethod = new modulus();
        return modulusMethod.modulus(input1, input2);
    };
    Calc.prototype.exponent = function (input1, input2) {
        var exponentMethod = new exponent();
        return exponentMethod.exponent(input1, input2);
    };
    return Calc;
}());
var calc = new Calc();
console.log(calc.add(2, 5));
console.log(calc.multiply(2, 5));
console.log(calc.subtract(5, 2));
console.log(calc.divide(10, 2));
console.log(calc.modulus(5, 2));
console.log(calc.exponent(3, 2));
