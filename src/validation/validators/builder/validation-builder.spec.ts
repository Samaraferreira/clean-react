import {
  EmailValidation,
  MinLengthValidation,
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

  test('Should return MinLengthValidation', () => {
    const validations = sut.field('any').min(5).build()
    expect(validations).toEqual([new MinLengthValidation('any', 5)])
  })
})
