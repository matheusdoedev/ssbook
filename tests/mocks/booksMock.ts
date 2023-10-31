import { Book } from '@/interfaces'

import { FakeBook } from '@tests/fakes'
import { range } from '@tests/utils'

export function booksMock(amount: number): Book[] {
  return range(0, amount).map(() => FakeBook())
}
