const grandParent = document.getElementById('grandParent')
const parent = document.getElementById('parent')
const child = document.getElementById('child')


class HandleClick{
    handleEvent(event)
    {
        // console.log(event.target) // on which element user has cliked
        // console.log(event.target.id + " called")

        // console.log(event.currentTarget)
        console.dir(this)
        console.log(event.currentTarget.id + ' called')
    }
}

const obj = new HandleClick()

function handleClick(event)
{
    console.dir(this)
    console.log(event.currentTarget.id + ' called')
}

grandParent.addEventListener('click',obj)

parent.addEventListener('click',obj)

child.addEventListener('click',obj)


// grandParent.addEventListener('click',handleClick)

// parent.addEventListener('click',handleClick)

// child.addEventListener('click',handleClick)