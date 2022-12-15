const catItemEl = document.querySelectorAll('.item');
console.log(`Number of categories:`,catItemEl.length);

for (let number of catItemEl) {
 
 const title = number.children[0];
 console.log(`Category:`,title.textContent);

 const totalItemEl = number.children[1].children
 console.log(`Elements:`, totalItemEl.length);
}


