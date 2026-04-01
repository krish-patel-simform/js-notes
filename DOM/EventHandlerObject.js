class Menu {
    handleEvent(event) {
      // mousedown -> onMousedown
      
      let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
      console.log(method)
      this[method](event);

      event.stopPropagation();
    }

    onMousedown() {
      elem.innerHTML = "Mouse button pressed";
    }

    onMouseup() {
      elem.innerHTML += "...and released.";
    }
  }

  let menu = new Menu();
  elem.addEventListener('mousedown', menu);
  elem.addEventListener('mouseup', menu);

  document.documentElement.addEventListener('mouseup',()=>{
    document.body.style.backgroundColor = 'red'
  })