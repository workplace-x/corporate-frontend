import { useState, useCallback } from 'react'
import OpenAI from 'openai'

interface ChatOptions {
  context?: string
  includeCompanyInfo?: boolean
  includeProjects?: boolean
}

interface ChatResponse {
  message: string
  suggestions?: string[]
  sources?: string[]
}

// Company knowledge base
const COMPANY_CONTEXT = `
Tangram Interiors is a leading commercial interior design and workplace solutions company serving California and Texas.

Services:
- Contract Furniture: Innovative workspace solutions with industry-leading manufacturers
- Architectural Walls: Demountable, sustainable, adaptable wall systems
- Technology: AV integration, conferencing solutions, smart office tech
- Studio Other: Custom design solutions and unique workspace environments
- Move + Facility Services: Comprehensive relocation and facility management

Markets:
- Workplace Design: Corporate offices, hybrid work solutions
- Healthcare: Healing environments, patient-centered design
- Education: K-12 and higher education learning environments
- Specialty Projects: Custom solutions for unique requirements

Key Differentiators:
- Steelcase partnership and authorized dealer
- Focus on human-centered design and employee well-being
- Sustainable, adaptable solutions
- Full-service approach from design to move management
- Technology integration expertise

Locations:
- Multiple showrooms across California (Los Angeles, Fresno, etc.)
- Texas operations (Dallas, expanding)
- Project work nationwide

Recent Focus:
- Post-pandemic workplace transformation
- Hybrid work environment solutions
- Behavioral health design
- Sustainable and adaptable workspace solutions
`

// Create OpenAI client only when needed and API key is available
function createOpenAIClient() {
  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY
  
  if (!apiKey || apiKey === 'your-openai-api-key-here') {
    return null
  }
  
  return new OpenAI({
    apiKey,
    dangerouslyAllowBrowser: true
  })
}

export function useAIChat() {
  const [isConnected, setIsConnected] = useState(true)

  const sendMessage = useCallback(async (
    message: string, 
    options: ChatOptions = {}
  ): Promise<ChatResponse> => {
    try {
      setIsConnected(true)

      // Check if OpenAI is available
      const openai = createOpenAIClient()
      
      if (!openai) {
        console.warn('OpenAI API key not configured. Using fallback responses.')
        const fallbackResponse = generateFallbackResponse(message)
        return {
          message: fallbackResponse,
          suggestions: generateSuggestions(message, options.context),
          sources: ['Tangram Interiors Knowledge Base']
        }
      }

      // Build context for the AI
      let systemContext = `You are an AI assistant for Tangram Interiors, a commercial interior design company. 
      You should be helpful, professional, and knowledgeable about workplace design, interior design trends, and the company's services.
      
      ${COMPANY_CONTEXT}`

      if (options.includeCompanyInfo) {
        systemContext += `\n\nAnswer questions about the company using the provided information. If asked about specific projects or detailed technical specifications, suggest contacting the team directly.`
      }

      // Generate suggestions based on the conversation context
      const suggestions = generateSuggestions(message, options.context)

      const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: systemContext
          },
          {
            role: "user",
            content: message
          }
        ],
        max_tokens: 500,
        temperature: 0.7,
      })

      const aiResponse = completion.choices[0]?.message?.content || 
        "I'm sorry, I couldn't process your request. Please try again or contact our team directly."

      return {
        message: aiResponse,
        suggestions: suggestions.slice(0, 3), // Limit to 3 suggestions
        sources: ['Tangram Interiors Knowledge Base']
      }

    } catch (error) {
      console.error('AI Chat Error:', error)
      setIsConnected(false)
      
      // Fallback responses based on keywords
      const fallbackResponse = generateFallbackResponse(message)
      
      return {
        message: fallbackResponse,
        suggestions: [
          "Tell me about your services",
          "Show me project examples", 
          "How can I contact you?"
        ]
      }
    }
  }, [])

  return {
    sendMessage,
    isConnected
  }
}

function generateSuggestions(message: string, context?: string): string[] {
  const lowerMessage = message.toLowerCase()
  
  // Service-related suggestions
  if (lowerMessage.includes('service') || lowerMessage.includes('offer')) {
    return [
      "Tell me about contract furniture solutions",
      "What is Studio Other?",
      "How do you handle technology integration?"
    ]
  }
  
  // Project-related suggestions
  if (lowerMessage.includes('project') || lowerMessage.includes('example') || lowerMessage.includes('portfolio')) {
    return [
      "Show me healthcare design projects",
      "Tell me about recent workplace transformations",
      "What education projects have you completed?"
    ]
  }
  
  // Pricing/quote suggestions
  if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('quote')) {
    return [
      "What factors affect project pricing?",
      "How long does a typical project take?",
      "What's included in your design services?"
    ]
  }
  
  // Design trend suggestions
  if (lowerMessage.includes('trend') || lowerMessage.includes('modern') || lowerMessage.includes('future')) {
    return [
      "What are the latest workplace design trends?",
      "How has hybrid work changed office design?",
      "Tell me about sustainable design practices"
    ]
  }
  
  // Default suggestions
  return [
    "What makes Tangram different?",
    "Tell me about your design process",
    "How can I schedule a consultation?"
  ]
}

function generateFallbackResponse(message: string): string {
  const lowerMessage = message.toLowerCase()
  
  if (lowerMessage.includes('service') || lowerMessage.includes('offer')) {
    return "Tangram Interiors offers comprehensive workplace solutions including contract furniture, architectural walls, technology integration, custom design, and move management services. We specialize in creating transformative spaces for workplaces, healthcare, and education. Would you like to learn more about any specific service?"
  }
  
  if (lowerMessage.includes('project') || lowerMessage.includes('example')) {
    return "We've completed projects across various markets including corporate workplaces, healthcare facilities, and educational institutions. Our recent work includes office transformations for media companies, law firms, and schools. I'd be happy to connect you with our team to discuss specific project examples relevant to your needs."
  }
  
  if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('quote')) {
    return "Project costs vary based on scope, timeline, and specific requirements. We provide detailed proposals after understanding your needs through our consultation process. Our team can schedule a meeting to discuss your project and provide accurate pricing information."
  }
  
  if (lowerMessage.includes('contact') || lowerMessage.includes('reach')) {
    return "You can reach our team through our website contact form, or contact our showrooms directly. We have locations across California and Texas. Would you like information about our nearest location?"
  }
  
  return "Thank you for your interest in Tangram Interiors! While our AI assistant features are currently being enhanced, our team is ready to help you with any questions about our interior design services, workplace solutions, or project consultation. Please feel free to contact us directly for immediate assistance."
} 