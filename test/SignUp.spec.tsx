import { screen, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import SignUp from '@/pages/signup'

test('Log in form', () => {
  render(
    <SignUp />
  )
})