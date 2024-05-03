## 1.1 动态类型语言和鸭子类型

编程语言按照数据类型大体可以分两类：静态类型语言、动态类型语言

静态类型语言在编译时便已确定变量的类型。
动态类型语言的变量类型要到程序运行的时候，待变量被赋值之后，才会具有某种类型。

```javascript
const duck = {
  duckSinging() {
    console.log('嘎嘎嘎');
  },
};

const chicken = {
  duckSinging() {
    console.log('嘎嘎嘎');
  },
};

const choir = [];

const joinChoir = function (animal) {
  if (animal && typeof animal.duckSinging === 'function') {
    choir.push(animal);
    console.log('恭喜加入合唱团');
    console.log('合唱团已有成员数量：' + choir.length);
  }
};

joinChoir(duck); // 恭喜加入合唱团
joinChoir(chicken); // 恭喜加入合唱团
```

## 多态

含义：统一操作作用于不同的对象上面，可以产生不同的解释和不同的执行结果。

### 1.2.1 一段“多态”的代码

```javascript
var makeSound = function (animal) {
  if (animal instanceof Duck) {
    console.log('嘎嘎嘎');
  } else if (animal instanceof Chicken) {
    console.log('咯咯咯');
  }
};

var Duck = function () {};
var Chicken = function () {};

makeSound(new Duck()); // 嘎嘎嘎
makeSound(new Chicken()); // 咯咯咯
```

把不变的部分隔离出来，把可变的部分封装起来，这给予了我们 扩展程序的能力，程序看起来是可生长的，也是符合开放—封闭原则的，相对于修改代码来说， 仅仅增加代码就能完成同样的功能，这显然优雅和安全得多。

### 1.2.2 对象的多态性

改写后的代码，先把不变的部分隔离出来

```js
var makeSound = function (animal) {
  animal.sound();
};
```

然后把可变的部分各自封装起来

```js
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
```

如果以后增加了一只狗，只要简单添加一些代码即可，无需改动以前的 `makeSound` 函数，如下所示：

```js
const Dog = function () {};

Dog.prototype.sound = function () {
  console.log('汪汪汪');
};

makeSound(new Dog()); // 汪汪汪
```
