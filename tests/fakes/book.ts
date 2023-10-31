import { faker } from '@faker-js/faker'

import { Book } from '@/interfaces'

import { FakeAuthor } from '@tests/fakes'

export function FakeBook(): Book {
  return {
    id: faker.string.uuid(),
    name: 'Book name',
    author: FakeAuthor(),
    cover: faker.image.url(),
    description: 'Book description'
  }
}
