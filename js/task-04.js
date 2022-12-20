const counterValue = {
value : 0,
};

const decrement = document.querySelector(`[data-action="decrement"]`);
const increment = document.querySelector(`[data-action="increment"]`);
const valueEl = document.querySelector(`#value`);

decrement.addEventListener(`click`, (event)=> {
counterValue.value -= event;
valueEl.textContent = counterValue.value;
})
console.log(decrement);


increment.addEventListener(`click`, (event) =>{
     counterValue.value += event;
     valueEl.textContent = counterValue.value;
     console.log(counterValue);
})
console.log(increment);

console.log(counterValue);