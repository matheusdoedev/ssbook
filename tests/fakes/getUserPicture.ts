import { faker } from '@faker-js/faker'

export function FakeUserPicture(): string {
  return faker.image.url()
}
