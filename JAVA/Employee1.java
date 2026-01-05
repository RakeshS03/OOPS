class Employee1 {
    // Private fields(i used for encapsulation)
    private int id;
    private String name;

    // Setter methods 
    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    // Getter methods
    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}

public class Main {
    public static void main(String[] args) {
        Employee1 emp = new Employee1();
        
        // Using setters
        emp.setId(03);
        emp.setName("Rakesh");

        // Using getters
        System.out.println("Employee ID: " + emp.getId());
        System.out.println("Employee Name: " + emp.getName());
    }
}