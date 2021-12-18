class Fist {
  constructor() {}
  hello() {
    console.log("Привет я метод родителя!");
  }
}

class Second extends Fist {
  secondHello() {
    super.hello();
    console.log("А я наследуемый метод!");
  }
}

const test = new Second();
test.secondHello();
