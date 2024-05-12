import { OrganizationEntity } from '@nooota/contracts'

export interface OrganizationState {
  organization?: OrganizationEntity | null

  stepInformation?: {
    name: string
    description: string
  }
}
