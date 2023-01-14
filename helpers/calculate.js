function calculate( operand, numberOne, numberTwo) {

  if(operand === '+') {
    return parseFloat((Number(numberOne) + Number(numberTwo)).toFixed(8)) || "Mistake";
  }

  if(operand === '-') {
    return parseFloat((Number(numberOne) - Number(numberTwo)).toFixed(8)) || "Mistake";
  }

  if(operand === '÷') {
    if(numberTwo === '0') {
      return "Prohibit"
    }
    return parseFloat((Number(numberOne) / Number(numberTwo)).toFixed(8)) || "Mistake";
  }

  if(operand === '∗') {
    return parseFloat((Number(numberOne) * Number(numberTwo)).toFixed(8)) || "Mistake";
  }
};