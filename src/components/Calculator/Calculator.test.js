import React from 'react'
import ReactDOM from 'react-dom'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Calculator from './Calculator'

describe('Calculator', () => {
  it('must render the component whitout errors', () => {
    const div = document.createElement('div')

    ReactDOM.render(<Calculator />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('must clear the calculators display', () => {
    const { getByTestId, getByText } = render(<Calculator />)

    fireEvent.click(getByText('2'))
    fireEvent.click(getByText('C'))

    expect(getByTestId('result')).toHaveValue('0')
  })

  it('must add 2 + 3 and get 5', () => {
    const { getByTestId, getByText } = render(<Calculator />)

    fireEvent.click(getByText('2'))
    fireEvent.click(getByText('+'))
    fireEvent.click(getByText('3'))
    fireEvent.click(getByText('='))

    expect(getByTestId('result')).toHaveValue('5')
  })

  it('must subtract 10 - 3 and get 7', () => {
    const { getByTestId, getByText } = render(<Calculator />)

    fireEvent.click(getByText('1'))
    fireEvent.click(getByText('0'))
    fireEvent.click(getByText('-'))
    fireEvent.click(getByText('3'))
    fireEvent.click(getByText('='))

    expect(getByTestId('result')).toHaveValue('7')
  })

  it('must divide 10 / 5 and get 2', () => {
    const { getByTestId, getByText } = render(<Calculator />)

    fireEvent.click(getByText('1'))
    fireEvent.click(getByText('0'))
    fireEvent.click(getByText('/'))
    fireEvent.click(getByText('5'))
    fireEvent.click(getByText('='))

    expect(getByTestId('result')).toHaveValue('2')
  })

  it('must multiply 10 * 2.5 and get 25', () => {
    const { getByTestId, getByText } = render(<Calculator />)

    fireEvent.click(getByText('1'))
    fireEvent.click(getByText('0'))
    fireEvent.click(getByText('*'))
    fireEvent.click(getByText('2'))
    fireEvent.click(getByText('.'))
    fireEvent.click(getByText('5'))
    fireEvent.click(getByText('='))

    expect(getByTestId('result')).toHaveValue('25')
  })
})
