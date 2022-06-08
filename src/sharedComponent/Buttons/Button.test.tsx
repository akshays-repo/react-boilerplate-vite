import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import AppButton from './Button.component'

it('render button', () => {
  render(<AppButton type={'primary'} title="clickme" />)
  expect(screen.getByText('clickme')).toBeInTheDocument()
})
