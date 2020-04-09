import React, { useState } from 'react'
import './Calculator.css'
import { 
  Jumbotron, 
  Container, 
  Row, 
  Col, 
  Button, 
  Form 
} from 'react-bootstrap'

import { 
  calculate, 
  concatenateNumbers,
  ADDITION,
  SUBTRACTION,
  DIVISION,
  MULTIPLICATION
} from '../../services/Calculator.service'

export default () => {
  const [result, setResult] = useState('0')
  const [number1, setNumber1] = useState('0')
  const [number2, setNumber2] = useState(null)
  const [operation, setOperation] = useState(null)

  function addNumber(number) {
    let result

    if (operation === null) {
      result = concatenateNumbers(number1, number)
      setNumber1(result)
    } else {
      result = concatenateNumbers(number2, number)
      setNumber2(result)
    }

    setResult(result)
  }

  function defineOperation(currentOperation) {
    if (operation === null) {
      setOperation(currentOperation)
      return
    }

    if (number2 !== null) {
      const result = calculate(number1, number2, operation)

      setOperation(currentOperation)
      setNumber1(result.toString())
      setNumber2(null)
      setResult(result.toString())
    }
  }

  function calculateAction() {
    if (number2 === null) {
      return
    }

    const result = calculate(number1, number2, operation)
    setResult(result)
  }

  function clearAction() {
    setResult('0')
    setNumber1('0')
    setNumber2(null)
    setOperation(null)
  }

  return (
    <div className="content">
      <Jumbotron
        style={{
          background: 'transparent !important',
          backgroundColor: '#007bff',
          padding: '5px',
          margin: '5px',
          width: '400px',
        }}
      >
        <Container>
          <Row>
            <Col xs="3"><Button variant="danger" onClick={ clearAction }>C</Button></Col>

            <Col xs="9">
              <Form.Control 
                type="text"
                name="result"
                className="text-right"
                readOnly="readonly"
                value={ result }
                data-testid="result"
              />
            </Col>
          </Row>

          <Row>
            <Col><Button variant="light" onClick={ () => { addNumber('7') } }>7</Button></Col>
            <Col><Button variant="light" onClick={ () => { addNumber('8') } }>8</Button></Col>
            <Col><Button variant="light" onClick={ () => { addNumber('9') } }>9</Button></Col>
            <Col><Button variant="warning" onClick={ () => { defineOperation('/') } }>{ DIVISION }</Button></Col>
          </Row>

          <Row>
            <Col><Button variant="light" onClick={ () => { addNumber('4') } }>4</Button></Col>
            <Col><Button variant="light" onClick={ () => { addNumber('5') } }>5</Button></Col>
            <Col><Button variant="light" onClick={ () => { addNumber('6') } }>6</Button></Col>
            <Col><Button variant="warning" onClick={ () => { defineOperation('*') } }>{ MULTIPLICATION }</Button></Col>
          </Row>

          <Row>
            <Col><Button variant="light" onClick={ () => { addNumber('1') } }>1</Button></Col>
            <Col><Button variant="light" onClick={ () => { addNumber('2') } }>2</Button></Col>
            <Col><Button variant="light" onClick={ () => { addNumber('3') } }>3</Button></Col>
            <Col><Button variant="warning" onClick={ () => { defineOperation('-') } }>{ SUBTRACTION }</Button></Col>
          </Row>

          <Row>
            <Col><Button variant="light" onClick={ () => { addNumber('0') } }>0</Button></Col>
            <Col><Button variant="light" onClick={ () => { addNumber('.') } }>.</Button></Col>
            <Col><Button variant="success" onClick={ calculateAction }>=</Button></Col>
            <Col><Button variant="warning" onClick={ () => { defineOperation('+') } }>{ ADDITION }</Button></Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  )
}