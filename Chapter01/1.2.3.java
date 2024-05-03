public class Duck {
    public void makeSound() {
        System.out.println("Quack");
    }
}

public class Chicken {
    public void makeSound() {
        System.out.println("Cluck");
    }
}

public class AnimalSound {
    public void makeSound(Duck duck) {
        duck.makeSound();
    }
}

public class Test {
  public static void main(String[] args) {
    AnimalSound animalSound = new AnimalSound();
    Duck duck = new Duck();
    animalSound.makeSound(duck);
  }
}
