// Parent Class
class Parent {
    // Overloaded method 
    public void func() {
        System.out.println("Parent");
    }

    // Overloaded method 
    public void func(int a) {
        System.out.println("Parent func" + a);
    }
}

// Child Class
class Child extends Parent {
    
    
    public void func(int a) {
        System.out.println("Child func " + a);
    }
}

public class Poly {
    public static void main(String[] args) {
        Parent parent = new Parent();
        Child child = new Child();
        // Dynamic dispatch
        Parent poly = new Child();  

        // Method Overloading (compile-time)
        parent.func();       
        parent.func(10);    

        // Method Overriding (runtime)
        child.func(20);     

        poly.func(30);  
    }
}