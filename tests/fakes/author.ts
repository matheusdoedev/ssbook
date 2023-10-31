import { faker } from '@faker-js/faker'

import { Author } from '@/interfaces'

export function FakeAuthor(): Author {
  return {
    id: faker.string.uuid(),
    name: faker.person.firstName(),
    booksCount: faker.number.int(),
    picture: faker.image.url()
  }
}
