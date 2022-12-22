const inputEl = document.querySelector(`#validation-input`);

const lengthEl = inputEl.getAttribute("data-length");


inputEl.addEventListener(`blur`, onInputBlur);

function onInputBlur(event) {
    
    if (Number(event.currentTarget.value.length) === Number(lengthEl)) {
        inputEl.classList.remove(`invalid`);
        inputEl.classList.add(`valid`);
            
    } else {
     inputEl.classList.remove(`valid`);
     inputEl.classList.add(`invalid`);
 
}
console.log(event.currentTarget.value);
event.currentTarget.reset();
};


