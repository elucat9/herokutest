

var operator = process.argv[2];
var operand1 = Number(process.argv[3]);
var operand2 = Number(process.argv[4]);

if(operator === "add") {
    console.log(operand1 + operand2);
}
else if(operator === "subtract") {
    console.log(operand1 - operand2);
}
else if(operator === "multiply") {
    console.log(operand1 * operand2);    
}
else if(operator === "divide") {
    console.log(operand1 / operand2);    
}
else if(operator === "remainder") {
    console.log(operand1 % operand2);    
}
else if(operator === "exp") {
    console.log(Math.pow(operand1, operand2));  
}



