const form = document.querySelector('.form');
form.addEventListener('submit', submitForm);


function submitForm (event) {
  event.preventDefault();

  let {elements: { delay, step, amount }} = event.currentTarget;  

  const firstDelay = delay.value;
  // console.log(firstDelay);
  const delayStep = step.value;
  // console.log(delayStep);
  const numberOfPromises = amount.value;
  // console.log(numberOfPromises);

  for (let i = 0; i <numberOfPromises; i ++) {

    let position = i + 1;
    const delay = Number(firstDelay) + delayStep * i;

     
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
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  }
  
    
  

  }












