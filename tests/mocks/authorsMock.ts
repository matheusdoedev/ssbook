import { Author } from '@/interfaces'

import { FakeAuthor } from '@tests/fakes'
import { range } from '@tests/utils'

export function authorsMock(amount: number): Author[] {
  return range(0, amount).map(() => FakeAuthor())
}
