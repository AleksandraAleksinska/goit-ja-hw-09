const form = document.querySelector('.form');
form.addEventListener('submit', createPromise);

let firstDelay = form.elements.delay.value;
let step = form.elements.step.value;
console.log(step);
let amount = form.elements.amount.value;
const delay = 6000;

console.log(delay);
let position;

function createPromise(position, delay) {
  
    return new Promise ((resolve, reject) => {
      
      setTimeout(() => {

        const shouldResolve = Math.random() > 0.3;
        
        if (shouldResolve) {
        // Fulfill
          resolve(`✅ Fulfilled promise ${position} in ${delay}ms`)  
      } else {
        // Reject
        reject(`❌ Rejected promise ${position} in ${delay}ms`)
      }
    }, delay)
  
 
}) 
};



createPromise(position, delay)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });


