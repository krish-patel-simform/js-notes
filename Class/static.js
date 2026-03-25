class User{
    
    constructor(name)
    {
        this.name = name
    }
    
    company = "Simform"

    static dept = "React"

    static sayCompany()
    {
        console.log(this.company)
        console.log(this)
        console.log(this.name)
        console.log(this.dept)
    }

    sayHi()
    {
        console.log("hi",this.name)
    }

}

const user = new User("Krish")

console.log(user)
    
User.sayCompany()

console.log(user.name)

console.log(user.company)


class Example {
  static value = 10;

  static showValue() {
    console.log(this.value); // 'this' refers to Example class
  }

  static doubleValue() {
    this.value = this.value * 2;
    return this.value;
  }
}

Example.showValue();       // 10
console.log(Example.doubleValue()); // 20
Example.showValue(); // 20

class Parent {
  static greeting = "Hello from Parent";

  static sayHello() {
    console.log(this.greeting);
  }
}

class Child extends Parent {
    static greeting = "Hello from Child"
}

Child.sayHello(); // "Hello from Child"
console.log(Child.greeting); // "Hello from Child"
