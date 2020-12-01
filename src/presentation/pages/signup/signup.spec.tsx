import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import SignUp from './signup'
import { Helper } from '@/presentation/test'

type SutTypes = {
  sut: RenderResult
}

const makeSut = (): SutTypes => {
  const sut = render(<SignUp />)
  return { sut }
}

describe('SignUp Component', () => {
  test('Should start with initial state', () => {
    const validationError = 'Campo Obrigatório'
    const { sut } = makeSut()
    Helper.testChildCount(sut, 'error-wrap', 0)
    Helper.testButtonIsDisabled(sut, 'submit', true)
    Helper.testStatusForfield(sut, 'name', validationError)
    Helper.testStatusForfield(sut, 'email', validationError)
    Helper.testStatusForfield(sut, 'password', validationError)
    Helper.testStatusForfield(sut, 'passwordConfirmation', validationError)
  })
})
