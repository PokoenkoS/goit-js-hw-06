const counterValue = {
     value: 0,
     increment(){
          this.value +=1;
     },
     decrement(){
          this.value -=1;
     }
};


const decrement = document.querySelector(`[data-action="decrement"]`);
const increment = document.querySelector(`[data-action="increment"]`);
const valueEl = document.querySelector(`#value`);

decrement.addEventListener(`click`, ()=> {
counterValue.decrement()
valueEl.textContent = counterValue.value;
})


increment.addEventListener(`click`, () =>{
     counterValue.increment()
     valueEl.textContent = counterValue.value;
})


