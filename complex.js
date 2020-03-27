var Complex = /** @class */ (function () {
    function Complex(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    Complex.prototype.add = function (complex) {
        return new Complex(this.real + complex.real, this.imaginary + complex.imaginary);
    };
    Complex.prototype.substraction = function (complex) {
        return new Complex(this.real - complex.real, this.imaginary - complex.imaginary);
    };
    Complex.prototype.module = function () {
        var result = Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
        console.log("Modul z liczby zespolonej : " + this.real + " + " + this.imaginary + "i = " + result);
    };
    Complex.prototype.toString = function () {
        console.log("Cz\u0119\u015B\u0107 rzeczywista: " + this.real + " , cz\u0119\u015B\u0107 urojona: " + this.imaginary);
    };
    return Complex;
}());
var complex1 = new Complex(2, 10);
var complex2 = new Complex(5, 2);
var resultAdd = complex1.add(complex2);
resultAdd.toString();
var resultSub = resultAdd.substraction(complex1);
resultSub.toString();
resultSub.module();
