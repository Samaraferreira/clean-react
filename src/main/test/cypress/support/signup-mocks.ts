import faker from 'faker'
import * as Helper from './http-mocks'

export const mockInvalidCredentialsError = (): void =>
  Helper.mockInvalidCredentialsError(/signup/)

export const mockUnexpectedError = (): void =>
  Helper.mockUnexpectedError(/signup/, 'POST')

export const mockOk = (): void =>
  Helper.mockOk(/signup/, 'POST', {
    accessToken: faker.random.uuid(),
    name: faker.name.findName()
  })

export const mockInvalidData = (): void =>
  Helper.mockOk(/signup/, 'POST', {
    invalid: faker.random.uuid()
  })

export const mockEmailInUseError = (): void =>
  Helper.mockEmailInUseError(/signup/)
