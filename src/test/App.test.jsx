import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

describe('MUI Button click behavior', () => {
  test('renders the button using getByRole', () => {
    render(<App />)

    const button = screen.getByRole('button', {
      name: /click me/i,
    })

    expect(button).toBeInTheDocument()
  })

  test('shows "Hi 1" after first click', async () => {
    const user = userEvent.setup()
    render(<App />)

    const button = screen.getByRole('button', {
      name: /click me/i,
    })

    await user.click(button)

    expect(screen.getByText('Hi 1')).toBeInTheDocument()
  })

  test('increments count on multiple clicks', async () => {
    const user = userEvent.setup()
    render(<App />)

    const button = screen.getByRole('button', {
      name: /click me/i,
    })

    await user.click(button)
    await user.click(button)

    expect(screen.getByText('Hi 2')).toBeInTheDocument()
  })
})
