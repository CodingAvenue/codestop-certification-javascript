function FindAllMethods(obj) {
    return Object.getOwnPropertyNames(obj).filter(function(property) {
        return typeof obj[property] == "function";
    });
}

console.log(FindAllMethods(Math));
console.log(FindAllMethods(Array));

function all_properties(obj) 
{
    return Object.getOwnPropertyNames(obj);
}

console.log(all_properties(Math));

console.log(all_properties(Array));