const obj = {
    start : 0,
    end:5
}

obj[Symbol.iterator] = function()
{
    return {
        current : this.start,
        last: this.end,
        next()
        {
            if(this.current <= this.last)
            {
                return {value : this.current++,done: false}  
            }
            return {value : undefined,done : true}
        }
    }
}

for(let value of obj)
{
    console.log(value)
}

const arrayLike = {
    0 : "Hello",
    1 : "world",
    length:2
}

arrayLike[Symbol.iterator] = function()
{
    this.index = 0
    const self = this;

    return{
        next()
        {
            if(self.index < self.length)
                return {value: self[self.index++],done : false}

            return { value: undefined,done: true}
        }
    }
}

for(let value of arrayLike)
{
    console.log(value)
}
