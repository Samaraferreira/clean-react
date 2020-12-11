import faker from 'faker'
import * as FormHelper from '../support/form-helper'
import * as Http from '../support/login-mock'

describe('SignUp', () => {
  beforeEach(() => {
    cy.visit('signup')
  })

  it('Should load with correct initial state', () => {
    FormHelper.testInputStatus('email', 'Campo Obrigatório')
    FormHelper.testInputStatus('name', 'Campo Obrigatório')
    FormHelper.testInputStatus('password', 'Campo Obrigatório')
    FormHelper.testInputStatus('passwordConfirmation', 'Campo Obrigatório')
    cy.getByTestId('submit').should('have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })
})
