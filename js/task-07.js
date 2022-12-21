const inputEl = document.querySelector(`#font-size-control`);
const nameLabel = document.querySelector(`#text`)

inputEl.addEventListener(`input`, onInputBlur);

function onInputBlur() {

nameLabel.style.fontSize = inputEl.value + 'px';

}
