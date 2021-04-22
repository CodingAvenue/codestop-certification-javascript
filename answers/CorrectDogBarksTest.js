function Dog (name) {
    this.name = name;
  }
  
  Dog.prototype.bark = function () {
    console.log(this.name + ' says woof');
  };
  
  let doggo = new Dog('doggo');
  doggo.bark();