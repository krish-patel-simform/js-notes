
// * call

function printFullName(city,state)
{
    console.log(this.fName + " " + this.lName + " from " + city+","+state)
}

const obj1 = {
    fName  : "krish",
    lName : "Patel"
}

const obj2 = {
    fName : "Jenith",
    lName : 'Panchal'
}

const fixThisFn = printFullName.bind(obj1,"Ahm")

// this function call leter on
fixThisFn("Ap")
fixThisFn()

printFullName.apply(obj1,['Ahm','Guj'])
console.log(printFullName.apply(obj2,['Mum','Mha']))

console.log(printFullName.call(obj1,'Ahm','Guj'))

printFullName.call(obj2,'Mum','Mha')

