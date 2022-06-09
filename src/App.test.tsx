import '@testing-library/jest-dom'
import App from './App'
import { render, screen } from './test-utils'

it('renders hello message', () => {
  render(<App />)
  expect(screen.getByText('HelloWorld')).toBeInTheDocument()
})
