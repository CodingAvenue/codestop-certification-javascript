function removeFirstTwo(list) {
    const [, , ...arr] = list; 
    return arr;
}

var arrLiteral = [8,9,10,11,12]
console.log("arr contains: " + removeFirstTwo(arrLiteral))