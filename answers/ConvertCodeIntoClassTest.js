class Dog {
    constructor (name) {
      this.name = name;
    }
  
    bark () {
      console.log(this.name + ' says woof');
    }
}

let doggo = new Dog('doggo');
doggo.bark();