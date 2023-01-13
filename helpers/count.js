function count(arr) {
  let operandMultiply;
  let operandDivide;
  let operandSum;
  let operandSubtraction;

  for(let i = 0; arr.length ; i++) {

    if(arr.length == 1) return lastValue = arr[0]
  
    operandMultiply = arr.indexOf('∗');
    operandDivide = arr.indexOf('÷');

    if(operandMultiply == -1) operandMultiply = 100000;
    if(operandDivide == -1) operandDivide = 100000;


    if(operandMultiply !== operandDivide) {
      if(operandMultiply < operandDivide) {
        total = calculate(arr[operandMultiply], arr[operandMultiply - 1], arr[operandMultiply + 1])

        currentValue.innerText = total

        arr[operandMultiply] = total
        value = total.toString()
        arr.splice(operandMultiply + 1, 1)
        arr.splice(operandMultiply - 1, 1)
      } else {
        total = calculate(arr[operandDivide], arr[operandDivide - 1], arr[operandDivide + 1])

        currentValue.innerText = total

        arr[operandDivide] = total
        value = total.toString()
        arr.splice(operandDivide + 1, 1)
        arr.splice(operandDivide - 1, 1)
      }
    } else {
      operandSum = arr.indexOf('+');
      operandSubtraction = arr.indexOf('-');

      if(operandSum == -1) operandSum = 100000;
      else operandSubtraction = 100000;

      if(operandSum < operandSubtraction) {
        total = calculate(arr[operandSum], arr[operandSum - 1], arr[operandSum + 1])

        currentValue.innerText = total

        arr[operandSum] = total
        value = total.toString()
        arr.splice(operandSum + 1, 1)
        arr.splice(operandSum - 1, 1)
      } else {
        total = calculate(arr[operandSubtraction], arr[operandSubtraction - 1], arr[operandSubtraction + 1])

        currentValue.innerText = total

        arr[operandSubtraction] = total
        value = total.toString()
        arr.splice(operandSubtraction + 1, 1)
        arr.splice(operandSubtraction - 1, 1)
      }
    }
  }
};