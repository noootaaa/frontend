import type { UserEntity } from './index'

export interface OrganizationEntity {
  id: string
  name: string
  description: string
  ownerId: string
  createdAt: string
  updatedAt: string
  users?: UserEntity[]
  owner?: UserEntity
}
