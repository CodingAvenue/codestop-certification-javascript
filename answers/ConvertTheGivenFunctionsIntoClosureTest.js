function greeter(name, age) {
    var message = "Say Hello to " + name + " at " + age + " years old.";
    return function greet() {
        console.log(message);
    };
}

var annaGreeter = greeter("Anna", 18);
annaGreeter();