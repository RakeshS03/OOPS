// Superclass 
class Animal {
    void eat() {
        System.out.println("eating");
    }

    void sleep() {
        System.out.println("sleeping...");
    }
}

// Subclass
class Dog extends Animal {
    void bark() {
        System.out.println("barking");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog myDog = new Dog();

        // Inherited
        myDog.eat();    
        myDog.sleep();  

        // Child class method
        myDog.bark();   
    }
}