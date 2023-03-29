import Notiflix from 'notiflix';

const form = document.querySelector('.form');
form.addEventListener('submit', submitForm);


function submitForm (event) {
  event.preventDefault();

  let {elements: { delay, step, amount }} = event.currentTarget;  

  const firstDelay = delay.value;
  const delayStep = step.value;
  const numberOfPromises = amount.value;

  for (let i = 1; i <= numberOfPromises; i ++) {

    let position = i;
    const delay = Number(firstDelay) + delayStep * (i-1);
        
    function createPromise(position, delay) {
      const shouldResolve = Math.random() > 0.3;
      return new Promise ((resolve, reject) => {

        setTimeout(() => {
          if (shouldResolve) {
            // Fulfill
            resolve({position, delay});
          } else {
            // Reject
            reject({position, delay});
          }

        }, delay)
      
      })  
    }

    createPromise(position, delay)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
    });
  }
}












