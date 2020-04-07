const ADDITION = '+'
const SUBTRACTION = '-'
const DIVISION = '/'
const MULTIPLICATION = '*'

function calculate(number1, number2, operation) {
  number1 = parseFloat(number1)
  number2 = parseFloat(number2)
  
  switch (operation) {
    case ADDITION:
      return number1 + number2

    case SUBTRACTION:
      return number1 - number2

    case DIVISION:
      return number1 / number2  

    case MULTIPLICATION:
      return number1 * number2  

    default:
      return 0
  }
}

function concatenateNumbers(actualNumber, newNumber) {
  if (actualNumber === '0' || actualNumber === null) {
    actualNumber = ''
  }

  if (newNumber === '.' && actualNumber === '') {
    return '0.'
  }

  if (newNumber === '.' && actualNumber.indexOf('.') > -1) {
    return actualNumber
  }

  return actualNumber + newNumber
}

export { 
  calculate,
  concatenateNumbers,
  ADDITION, 
  SUBTRACTION, 
  DIVISION,
  MULTIPLICATION
}