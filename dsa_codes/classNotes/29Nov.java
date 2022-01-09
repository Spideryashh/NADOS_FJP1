// =>topics covered in this code : 
// Classes and Objects
// Reference
// Instance
// new operator
// this keyword
// data members
// methods 

import java.util.*;

public class Main {

  private static class Person {
      String name;
      int age;

      void sayHi(){
        if(this.age > 30){
          System.out.println("Hello from " + this.name);
        } else {
          System.out.println("Hi from " + this.name);
        }
        
      }
  }


  public static void main(String[] args) {
    // Write your code here
    Person p1;

    p1 = new Person();
    p1.age = 34;
    p1.name = "Sumeet";
    p1.sayHi();

    Person p2;
    p2 = new Person();
    p2.age = 25;
    p2.name = "Shashank";
    p2.sayHi();
  }
}
