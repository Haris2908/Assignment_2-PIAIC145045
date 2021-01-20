var firstNum = +prompt("Enter first number")
var operator = prompt ("Enter Operator")
var secondNum = +prompt("Enter second number")

if(operator === '+'){
    document.write(firstNum + secondNum)
}
else if(operator === '-'){
    document.write(firstNum - secondNum)
}
else if(operator === '*'){
    document.write(firstNum * secondNum)
}
else if(operator === '/'){
    document.write(firstNum / secondNum)
}
else if(operator === '%'){
    document.write(firstNum % secondNum)
}