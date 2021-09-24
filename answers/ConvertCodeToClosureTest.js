function greeter(name, age) {
    var message = name + " says Hey!! She is " + age + " years old";
    return function greet() {
        console.log(message);
    };
}

var AnnaGreeter = greeter("Anna", 25);

AnnaGreeter();