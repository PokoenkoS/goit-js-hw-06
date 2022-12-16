const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingrListEl =document.querySelector(`#ingredients`);

ingrListEl.append(...
ingredients.map(option=>{

const ingrItemEl = document.createElement(`li`);
ingrItemEl.textContent = option ;
ingrItemEl.classList.add(`title`);
return ingrItemEl;

}))

console.log(ingrListEl);



// const ingrItemEl = document.createElement(`li`);
// ingrItemEl.textContent =  'Potatoes';
// ingrItemEl.classList.add(`title`);

// const ingrItemEl1 = document.createElement(`li`);
// ingrItemEl1.textContent =  'Mushrooms';
// ingrItemEl1.classList.add(`title`);

// const ingrItemEl2 = document.createElement(`li`);
// ingrItemEl2.textContent =  'Garlic';
// ingrItemEl2.classList.add(`title`);

// const ingrItemEl3 = document.createElement(`li`);
// ingrItemEl3.textContent =  'Tomatos';
// ingrItemEl3.classList.add(`title`);

// const ingrItemEl4 = document.createElement(`li`);
// ingrItemEl4.textContent =  'Herbs';
// ingrItemEl4.classList.add(`title`);

// const ingrItemEl5 = document.createElement(`li`);
// ingrItemEl5.textContent =  'Condiments';
// ingrItemEl5.classList.add(`title`);

// const ingrListEl =document.querySelector(`#ingredients`);

// ingrListEl.append(ingrItemEl, ingrItemEl1, ingrItemEl2, ingrItemEl3, ingrItemEl4, ingrItemEl5);

// console.log( ingrListEl);



