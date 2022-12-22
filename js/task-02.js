const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingrListEl = document.querySelector(`#ingredients`);

 const listEl= ingredients.map(option=>{
  
  const ingrItemEl = document.createElement(`li`);
  ingrItemEl.textContent = option ;
  ingrItemEl.classList.add(`title`);
  return ingrItemEl;

  ingrListEl.append(...listEl);

// ingrListEl.append(...
// ingredients.map(option=>{

// const ingrItemEl = document.createElement(`li`);
// ingrItemEl.textContent = option ;
// ingrItemEl.classList.add(`title`);
// return ingrItemEl;

})

console.log(ingrListEl);






