function Person(name, age) {
    this.name = name;
    this.age = age;
};

function Woman(name,age) {
    Person.call(this, name, age);
};

Woman.prototype = Object.create(Person.prototype);
Woman.prototype.constructor = Woman;


function check(){
    var obj = new Woman("Janelle Smith",20);
    console.log(obj.name); 
    console.log(obj instanceof Person); 
}
check();
