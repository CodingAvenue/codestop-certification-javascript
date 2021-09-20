let dog = {
    name: 'doggo',
    sayName () {
      console.log(this.name);
    }
  };
  dog.sayName();