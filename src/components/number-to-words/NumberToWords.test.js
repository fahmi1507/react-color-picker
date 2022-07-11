import { render, screen } from "@testing-library/react"
import NumberToWords from "./NumberToWords"

test('input has value of zero', () => {
    render(<NumberToWords/>)

    expect(screen.getByDisplayValue('0'))
})

test('div displaying text according input', () => {
    render(<NumberToWords/>)

    screen.getByText('zero', {exact: false})
})