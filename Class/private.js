
//* without protected or anything 
// class CoffeeMachine{
//     waterLevel = 100

//     constructor(powder)
//     {
//         this.powder = powder
//         console.log("Created an Coffee machine with power : ",this.powder)
//     }
// }

// let obj = new CoffeeMachine()
// obj.waterLevel = 200

// console.log(obj.waterLevel)


//* with protected 
class User{
    _name = "edfaultUser"
    constructor(name)
    {
        this._name = name;
    }

    _setInternal()
    {
        console.log('from the internal:',this._name)
    }

    static getName()
    {
        console.log(this._name)
    }
}

class Admin extends User{
    showName()
    {
        console.log(this._name)
        this._setInternal()
    }
}

User.getName()
const admin = new Admin("Krish")

admin._name = "Raju"
admin.showName()

class CoffeeMachine{
    _waterAmount = 0;

    get waterAmount()
    {
        return this._waterAmount;
    }

    set waterAmount(water)
    {
        if(water < 0)
            water = 0

        this._waterAmount = water
    }

    constructor(powder)
    {
        this._powder = powder
    }
}


const coffeeMachine = new CoffeeMachine(100)


coffeeMachine.waterAmount = -15

console.log(coffeeMachine.waterAmount)


class Example {
  static #secret = 42;

  static revealSecret() {
    return this.#secret;
  }
}

console.log(Example.revealSecret()); // 42
// console.log(Example.#secret); // ❌ SyntaxError


console.log(Object.keys(new Example()))

