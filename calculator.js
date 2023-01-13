let cancel = document.getElementById('cancel');
let previousValue = document.getElementById('previousValue');
let currentValue = document.getElementById('currentValue');
let content = document.getElementById('content');
let contentOperation = document.getElementById('contentOperation');
let buttons = document.querySelectorAll('.buttonNumber');
let operators = document.querySelectorAll('.buttonOperation');

let value = '';
let arr = [];
let total;
let lastValue;
let firstElement;

// ITERATION OF NUMBERS
for(let button of buttons) {

  button.addEventListener('click', function(event) {
    lastValue = '';

    if(value.indexOf('.') !== -1 && event.target.innerText === '.') return;
    
    if(value.length == 0 && event.target.innerText === '.') {
      currentValue.innerText = '0.';
      value = '0'
    }

    previousElement = '';

    if(event.target.innerText == 'CE') {
      previousValue.innerText = '';
      currentValue.innerText = '';
      value = '';
    } else {
      value += event.target.innerText;
      currentValue.innerText = value;
    }
  })
};

// ITERATION OF OPERATORS
for(let operator of operators) {

  operator.addEventListener('click', function(event) {
    
    if(value == lastValue) value = '';
    
    if(value) arr.push(value);

    let checkOperator = arr[arr.length - 1];
    
    if(event.target.innerText == '=') {
      previousValue.innerText = '';
      value = '';
      count(arr);
      if(lastValue === "Prohibit" || currentValue.innerText == "Mistake") {

        setTimeout(() => {
          content.style = "pointer-events: none;"
          contentOperation.style = "pointer-events: none;"
        }) 
        setTimeout(() => {
          previousValue.innerText = '';
          currentValue.innerText = '' ;
          content.style = "pointer-events: all;"
          contentOperation.style = "pointer-events: all;"
        }, 2000 );
      }
      value = '';
      arr = [];
      return
    }
    if(lastValue) {
      if(lastValue === "Prohibit") return
      arr.push(lastValue);
      arr.push(operator.textContent);
      previousValue.innerText = ' ' + lastValue + ' ' + operator.textContent;
      currentValue.innerText = '';
      lastValue = '';
    }else {
      
        if(checkOperator == '+' || checkOperator == '-' || checkOperator == '∗' || checkOperator == '÷') {
          let getSubstr = (previousValue.innerText).slice(0, previousValue.innerText.length - 1);
          previousValue.innerText = getSubstr + operator.textContent;
          arr[arr.length - 1] = operator.textContent;
          return
        } 

        if(value.length == 0) return
      
      arr.push(operator.textContent);
      previousValue.innerText += ' ' + value + ' ' + operator.textContent;
      value = '';
      currentValue.innerText = '';
    }
  })
};






