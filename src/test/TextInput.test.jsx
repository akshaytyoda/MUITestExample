import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TextInput from '../App'

describe('TextInput component', () => {
  test('renders textbox using getByRole', () => {
    render(<TextInput />)

    const textbox = screen.getByRole('textbox', {
      name: /name/i,
    })

    expect(textbox).toBeInTheDocument()
  })

  test('allows typing into the textbox', async () => {
    const user = userEvent.setup()
    render(<TextInput />)

    const textbox = screen.getByRole('textbox', {
      name: /name/i,
    })

    await user.type(textbox, 'Akshay')

    expect(textbox).toHaveValue('Akshay')
  })

  test('shows greeting text after typing', async () => {
    const user = userEvent.setup()
    render(<TextInput />)

    const textbox = screen.getByRole('textbox', {
      name: /name/i,
    })

    await user.type(textbox, 'Akshay')

    expect(screen.getByText('Hello Akshay')).toBeInTheDocument()
  })
})
