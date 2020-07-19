var output = 0;

for (i = 1; i <= 4; i++){
    var input = prompt("Enter the"+ i + "Quarter Sales");
    output += calculateComission(input);
}
alert("Total Comission is: "+output);

function calculateComission(input) {
  if (input <= 5000) {
    return input*.02;
  } else if (input > 5000 && input<=10000) {
    return input*.05;
  } else if (input > 10000 && input<=20000) {
    return input*.07;
  } else if (input > 20000) {
    return input*.10;
  }

  return input;
}

