import { useQuery } from '@tanstack/react-query'
import { TeamMember, CorporateApiResponse } from '@/types/corporate'

interface UseTeamMembersOptions {
  featured?: boolean
  location?: string
  specialty?: string
  limit?: number
  offset?: number
}

export function useTeamMembers(options: UseTeamMembersOptions = {}) {
  return useQuery({
    queryKey: ['team-members', options],
    queryFn: async (): Promise<TeamMember[]> => {
      const params = new URLSearchParams()
      
      if (options.featured !== undefined) params.append('featured', String(options.featured))
      if (options.location) params.append('location', options.location)
      if (options.specialty) params.append('specialty', options.specialty)
      if (options.limit) params.append('limit', String(options.limit))
      if (options.offset) params.append('offset', String(options.offset))

      const response = await fetch(`/api/corporate/team?${params}`)
      
      if (!response.ok) {
        throw new Error('Failed to fetch team members')
      }

      const data: CorporateApiResponse<TeamMember[]> = await response.json()
      
      if (!data.success) {
        throw new Error(data.message || 'Failed to fetch team members')
      }

      return data.data
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  })
}

export function useTeamMember(id: string) {
  return useQuery({
    queryKey: ['team-member', id],
    queryFn: async (): Promise<TeamMember> => {
      const response = await fetch(`/api/corporate/team/${id}`)
      
      if (!response.ok) {
        throw new Error('Failed to fetch team member')
      }

      const data: CorporateApiResponse<TeamMember> = await response.json()
      
      if (!data.success) {
        throw new Error(data.message || 'Failed to fetch team member')
      }

      return data.data
    },
    enabled: !!id,
    staleTime: 10 * 60 * 1000, // 10 minutes
    retry: 2,
  })
} 