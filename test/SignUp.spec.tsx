import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import SignUp from '@/pages/signup'

test('Log in form', () => {
  render(
    <SignUp />
  )
})