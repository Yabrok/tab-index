const elForm = document.querySelector('.js-form');
const elInput = document.querySelector('.js-input');

const elBox = document.querySelector('.js-box');

const elPositive = document.querySelector('.js-positive');
const elNegative = document.querySelector('.js-negative');
const elNeutral = document.querySelector('.js-neutral');
const elResult = document.querySelector('.js-result');


elForm.addEventListener('submit', (evt)=> {
  evt.preventDefault();

  if(elInput.value !=1 && elInput.value !=2 && elInput.value !=3){
    alert('index is invalid')
  }
  if(elInput.value == 1){
    elPositive.style.opacity = '1'

    elNegative.style.opacity = '0.4'
    elNeutral.style.opacity = '0.4'

    elResult.textContent = 'Positive content'
  }
  if(elInput.value == 2){
    elNegative.style.opacity = '1'

    elPositive.style.opacity = '0.4'
    elNeutral.style.opacity = '0.4'

    elResult.textContent = 'Negative content'

  }
  if(elInput.value == 3){
    elNeutral.style.opacity = '1'

    elPositive.style.opacity = '0.4'
    elNegative.style.opacity = '0.4'

    elResult.textContent = 'Neutral content'
  }

  elInput.value = ''
})

elBox.addEventListener('click', (evt) => {
  if(evt.target.matches('.js-positive')){
    elPositive.style.opacity = '1'
    elNegative.style.opacity = '0.4'
    elNeutral.style.opacity = '0.4'
    elResult.textContent = 'Positive content'
  }
  if(evt.target.matches('.js-negative')){
    elNegative.style.opacity = '1'
    elPositive.style.opacity = '0.4'
    elNeutral.style.opacity = '0.4'
    elResult.textContent = 'Negative content'
  }
  if(evt.target.matches('.js-neutral')){
    elNeutral.style.opacity = '1'
    elPositive.style.opacity = '0.4'
    elNegative.style.opacity = '0.4'
    elResult.textContent = 'Neutral content'
  }
})