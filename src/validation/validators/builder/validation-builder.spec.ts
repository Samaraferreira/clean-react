import {
  EmailValidation,
  RequiredFieldValidation
} from '@/validation/validators'
import { ValidationBuilder as sut } from './validation-builder'

describe('ValidationBuilder', () => {
  test('Should return RequiredFieldValidation', () => {
    const validations = sut.field('any').required().build()
    expect(validations).toEqual([new RequiredFieldValidation('any')])
  })

  test('Should return EmailValidation', () => {
    const validations = sut.field('any').email().build()
    expect(validations).toEqual([new EmailValidation('any')])
  })
})
