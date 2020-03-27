class Complex {
    private real: number;
    private imaginary: number;

    constructor(real: number, imaginary: number){
        this.real = real;
        this.imaginary = imaginary;
    }

    add(complex: Complex) : Complex{
        return new Complex(this.real + complex.real, this.imaginary + complex.imaginary);
    }
    substraction(complex: Complex): Complex{
        return new Complex(this.real - complex.real, this.imaginary - complex.imaginary);
    }

    module(){
        let result = Math.sqrt(Math.pow(this.real,2)+ Math.pow(this.imaginary,2));
        console.log(`Modul z liczby zespolonej : ${this.real} + ${this.imaginary}i = ${result}`);
    }
    toString(){
        console.log(`Część rzeczywista: ${this.real} , część urojona: ${this.imaginary}`)
    }
}

let complex1 = new Complex(2,10);
let complex2 = new Complex(5,2);

let resultAdd = complex1.add(complex2);
resultAdd.toString();

let resultSub = resultAdd.substraction(complex1);
resultSub.toString();

resultSub.module();



