class MyClass{
    constructor()
    {
        this.name = "kp"
    }
    setName(name){
        this.name = name
    }
    getName()
    {
        return this.name
    }

}

console.log(MyClass.prototype)
console.log(typeof MyClass)
// method are automatically attached


class User {
  constructor(name) {
		this.name=name;
  }

  sayHi() {
    console.log(this)
	// console.log(this.name);
  }
}

const user = new User("Krish");

let fn = user.sayHi;
fn();// ?


// * class Expression give a name to class that called class expression

const Rectangle = class{
    constructor(height,width)
    {
        this.height = height;
        this.width = width;
    }

    area()
    {
        return this.height*this.width
    }
}


const rect = new Rectangle(10,20)
console.log(rect.area())


//* Getter/ setter


class Demo{

    constructor(name){
        this.name = name;
    }

    get name()
    {
        return this._name;
    }

    set name(name)
    {
        if(name.length < 4)
        {
            alert("Nameis too short")
            return;
        }
        this._name = name;
    }
}

// obj = new Demo() //
// console.log(obj.name)

obj2 = new Demo("Krish")
console.log(obj2.name)


//*

class Button {
  constructor(value) {
    this.value = value;
  }

  click() {
    console.log(this)
    console.log(this.value);
  }
}

let button = new Button("hello");

// setTimeout(button.click, 1000); // undefined

fn = button.click

console.log(fn())