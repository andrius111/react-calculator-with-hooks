import React from 'react'
import ReactDOM from 'react-dom'

import { 
  calculate, 
  ADDITION, 
  SUBTRACTION,
  DIVISION,
  MULTIPLICATION
} from './Calculator.service'

describe('CalculatorService test', () => {
  it('Must ensure that 1 + 1 = 2', () => {
    let addition = calculate(1, 1, ADDITION)
    expect(addition).toEqual(2)
  })

  it('Must ensure that 10 - 5 = 5', () => {
    let subtraction = calculate(10, 5, SUBTRACTION)
    expect(subtraction).toEqual(5)
  })

  it('Must ensure that 20 / 2 = 10', () => {
    let division = calculate(20, 2, DIVISION)
    expect(division).toEqual(10)
  })

  it('Must ensure that 10 * 10 = 100', () => {
    let multiplication = calculate(10, 10, MULTIPLICATION)
    expect(multiplication).toEqual(100)
  })

  it('Must return 0 to an invalid operation', () => {
    let invalidOperation = calculate(1, 1, '%')
    expect(invalidOperation).toEqual(0)
  })
})