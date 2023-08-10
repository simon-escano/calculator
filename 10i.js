let calculation = localStorage.getItem('calculation') || '';
let result = '';
updateInput(calculation)

function updateCalculation(value) {
  if (value === '=') {
    result = eval(calculation);
    if (typeof result === 'undefined') {
      result = '';
    }
    document.querySelector('.input').value = calculation;
    document.querySelector('.output').value = result;
  } else if (value === 'Clear') {
    calculation='';
    document.querySelector('.input').value = '';
    document.querySelector('.output').value = '';
  } else {
    calculation += value;
    updateInput(calculation);
  }

  localStorage.setItem('calculation', calculation);
}

function updateInput(calculation) {
  const strlen = String(calculation).length;
  const input = document.querySelector('.input');
  if (strlen >= 10 && strlen < 14) {
    input.classList.add('input-small');
  } else if (strlen >= 14 && strlen < 18) {
    input.classList.add('input-smaller');
  } else if (strlen >= 18) {
    input.classList.add('input-smallest');
  } else {
    input.classList.remove('input-small');
    input.classList.remove('input-smaller');
    input.classList.remove('input-smallest');
  }
  input.value = calculation;
}

function erase() {
  calculation = String(calculation);
  calculation = calculation.slice(0, (calculation.length)-1);
  localStorage.setItem('calculation', calculation);
  updateInput(calculation);
}