import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Photos from "./Photos"

test('component renders buttons', () => {
    render(<Photos/>)

    screen.getAllByRole('button')
})

test('component renders display mode button', () => {
    render(<Photos/>)
    screen.getAllByRole('button', {name: /list/i})
})
