const inputEl = document.querySelector(`#font-size-control`);
const nameLabel = document.querySelector(`#text`)
// nameLabel.classList.add(`font-size`);
console.log(nameLabel);
inputEl.addEventListener(`input`, onInputBlur);

function onInputBlur(event) {
    // document.getElementById("text").style.fontSize = "event.currentTarget.value"
//     document.getElementById(`text`).font-size = "event.currentTarget.value";
//     document.body.span.style.font-size = 'event.currentTarget.value';
// nameLabel.textContent = event.currentTarget.value;
nameLabel.classList.add(`font-size = "${event.currentTarget.value}"`);
nameLabel.style.
console.log(nameLabel);
console.log(event);
}
