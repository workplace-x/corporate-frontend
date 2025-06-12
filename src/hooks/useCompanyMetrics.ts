import { useQuery } from '@tanstack/react-query'
import { CompanyMetrics, CorporateApiResponse } from '@/types/corporate'

export function useCompanyMetrics() {
  return useQuery({
    queryKey: ['company-metrics'],
    queryFn: async (): Promise<CompanyMetrics> => {
      const response = await fetch('/api/corporate/homepage-data')
      
      if (!response.ok) {
        throw new Error('Failed to fetch company metrics')
      }

      const data: CorporateApiResponse<{ hero: { metrics: CompanyMetrics } }> = await response.json()
      
      if (!data.success) {
        throw new Error(data.message || 'Failed to fetch company metrics')
      }

      return data.data.hero.metrics
    },
    staleTime: 15 * 60 * 1000, // 15 minutes - metrics don't change frequently
    retry: 2,
    // Provide fallback data while loading
    placeholderData: {
      total_projects: 500,
      years_in_business: 15,
      square_feet_designed: 2500000,
      clients_served: 200,
      team_members: 75,
      locations: 5,
      awards_won: 25,
      sustainability_certifications: 10,
      current_month_projects: 12,
      current_year_revenue_growth: 15,
    },
  })
} 