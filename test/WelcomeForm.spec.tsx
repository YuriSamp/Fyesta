import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import LogIn from '@/pages'

describe('Log in form', () => {
  test('if user want to Sign up', () => {
    render(
      <LogIn />
    )

  })
})