import { v4 as uuidv4 } from 'uuid';
import * as faker from 'faker';

export interface User {
  id: string
  name: string
  description?: string
  quantity: number
  createdAt: Date
  deletedAt?: Date
}

export function generateFakeData(): User {
  return {
    id: uuidv4(),
    quantity: Math.random(),
    name: faker.lorem.word(),
    description: faker.lorem.words(),
    createdAt: new Date(),
  }
}
