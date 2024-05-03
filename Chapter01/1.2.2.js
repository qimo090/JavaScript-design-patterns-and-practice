const makeSound = function (animal) {
  animal.sound();
};

const Duck = function () {};

Duck.prototype.sound = function () {
  console.log('嘎嘎嘎');
};

const Chicken = function () {};

Chicken.prototype.sound = function () {
  console.log('咯咯咯');
};

makeSound(new Duck()); // 嘎嘎嘎
makeSound(new Chicken()); // 咯咯咯

const Dog = function () {};

Dog.prototype.sound = function () {
  console.log('汪汪汪');
};

makeSound(new Dog()); // 汪汪汪
