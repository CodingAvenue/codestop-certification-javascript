class Polygon {
    constructor(sides) {
        this.sides = sides;
    }
    perimeter() {
        var sum = 0;
        for(var i=0;i< this.sides.length; i++){
            sum = sum + this.sides[i];
        }
        return sum;
    }
}

arr=[2,5,3,5];
poly = new Polygon(arr);
console.log(poly.perimeter());