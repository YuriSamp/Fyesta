import { screen, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import LogIn from '@/pages'

describe('Log in form', () => {
  test('if user want to Sign up', () => {
    render(
      <LogIn />
    )

  })
})