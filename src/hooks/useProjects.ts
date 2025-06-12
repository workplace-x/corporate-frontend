import { useQuery } from '@tanstack/react-query'
import { ProjectSummary, CorporateApiResponse } from '@/types/corporate'

interface UseProjectsOptions {
  featured?: boolean
  category?: 'workplace' | 'healthcare' | 'education' | 'other'
  industry?: string
  limit?: number
  offset?: number
}

export function useProjects(options: UseProjectsOptions = {}) {
  return useQuery({
    queryKey: ['projects', options],
    queryFn: async (): Promise<ProjectSummary[]> => {
      const params = new URLSearchParams()
      
      if (options.featured !== undefined) params.append('featured', String(options.featured))
      if (options.category) params.append('category', options.category)
      if (options.industry) params.append('industry', options.industry)
      if (options.limit) params.append('limit', String(options.limit))
      if (options.offset) params.append('offset', String(options.offset))

      const response = await fetch(`/api/corporate/projects?${params}`)
      
      if (!response.ok) {
        throw new Error('Failed to fetch projects')
      }

      const data: CorporateApiResponse<ProjectSummary[]> = await response.json()
      
      if (!data.success) {
        throw new Error(data.message || 'Failed to fetch projects')
      }

      return data.data
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  })
}

export function useProject(id: string) {
  return useQuery({
    queryKey: ['project', id],
    queryFn: async (): Promise<ProjectSummary> => {
      const response = await fetch(`/api/corporate/projects/${id}`)
      
      if (!response.ok) {
        throw new Error('Failed to fetch project')
      }

      const data: CorporateApiResponse<ProjectSummary> = await response.json()
      
      if (!data.success) {
        throw new Error(data.message || 'Failed to fetch project')
      }

      return data.data
    },
    enabled: !!id,
    staleTime: 10 * 60 * 1000, // 10 minutes
    retry: 2,
  })
} 