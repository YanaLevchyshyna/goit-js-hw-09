import Notiflix from 'notiflix';

const options = {
  position: 'right-top',
  distance: '12px',
  borderRadius: '25px',
  timeout: 6000,
  cssAnimationStyle: 'fade',
};

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
};

refs.form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const { delay, step, amount } = e.currentTarget.elements;

  let inputDelayEl = Number(delay.value);
  const inputStepEl = Number(step.value);
  const inputAmountEl = Number(amount.value);

  for (let i = 1; i <= inputAmountEl; i += 1) {
    createPromise(i, inputDelayEl)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `Fulfilled promise ${position} in ${delay}ms`,
          options
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          ` Rejected promise ${position} in ${delay}ms`,
          options
        );
      });
    inputDelayEl += inputStepEl;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }

      reject({ position, delay });
    }, delay);
  });
}
