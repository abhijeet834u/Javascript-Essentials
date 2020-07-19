var input1 = prompt("Enter 1st input:");
var input2 = prompt("Enter 2nd input:");
var operator = prompt("Enter which operator you want to perform");7

alert(calculate(input1, input2, operator));

function calculate(input1, input2, operator) {
  if (operator === '+') {
    return input1 + input2;
  } else if (operator === '-') {
    return input1 - input2;
  } else if (operator === '*') {
    return input1 * input2;
  } else if (operator === '/') {
    return input1 / input2;
  }

  return input2;
}