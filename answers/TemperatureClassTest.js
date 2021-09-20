class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }

    get fahrenheit() {
        return this.celsius * 1.8 + 32;
    }

    set fahrenheit(value) {
        this.celsius = (value - 32) / 1.8;
    }

    static fromFahrenheit(value) {
        return new Temperature((value - 32) / 1.8);
    }
}
let temp = new Temperature(37);
console.log(temp.fahrenheit); // 98.60000000000001

temp.fahrenheit = 108;
console.log(temp.celsius); //42.22222222222222