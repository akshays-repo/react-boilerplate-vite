/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import '@testing-library/jest-dom'
import { screen, render, fireEvent } from '../../test-utils'
import UserFeature from './User.feature'
import { setupServer } from 'msw/node'
import { rest } from 'msw'

// We use msw to intercept the network request during the test,
// and return the response 'John Smith' after 150ms
// when receiving a get request to the `/api/user` endpoint
const handlers = [
  rest.get('/api/user', (req, res, ctx) => {
    return res(ctx.json('Akshays'), ctx.delay(150))
  }),
]

const server = setupServer(...handlers)

// Enable API mocking before tests.
beforeAll(() => server.listen())

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers())

// Disable API mocking after the tests are done.
afterAll(() => server.close())

test('renders hello message', async () => {
  render(<UserFeature />)
  // should show no user initially, and not be fetching a user
  expect(screen.getByText(/no user/i)).toBeInTheDocument()
  expect(screen.queryByText(/Fetching user\.\.\./i)).not.toBeInTheDocument()

  // after clicking the 'Fetch user' button, it should now show that it is fetching the user
  fireEvent.click(screen.getByRole('button', { name: /Fetch user/i }))
  expect(screen.getByText(/no user/i)).toBeInTheDocument()

  // after some time, the user should be received
  expect(await screen.findByText(/Akshays/i)).toBeInTheDocument()
  expect(screen.queryByText(/no user/i)).not.toBeInTheDocument()
  expect(screen.queryByText(/Fetching user\.\.\./i)).not.toBeInTheDocument()
})
