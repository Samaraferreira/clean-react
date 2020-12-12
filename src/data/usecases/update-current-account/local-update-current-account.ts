import { SetStorage } from '@/data/protocols/cache/set-storage'
import { UpdateCurrentAccount } from '@/domain/usecases'
import { UnexpectedError } from '@/domain/errors'
import { AccountModel } from '@/domain/models'

export class LocalUpdateCurrentAccount implements UpdateCurrentAccount {
  constructor(private readonly setStorage: SetStorage) {}

  async save(account: AccountModel): Promise<void> {
    if (!account) {
      throw new UnexpectedError()
    }
    if (!account.accessToken || !account.name) {
      throw new UnexpectedError()
    }
    this.setStorage.set('account', JSON.stringify(account))
  }
}
