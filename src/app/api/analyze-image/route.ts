import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function POST(request: NextRequest) {
  try {
    const { imageUrl, prompts } = await request.json()

    if (!imageUrl) {
      return NextResponse.json({ error: 'Image URL is required' }, { status: 400 })
    }

    // GPT-4 Vision prompt for interior design analysis
    const analysisPrompt = `
You are an expert interior designer and furniture specialist. Analyze this interior space image and provide a detailed analysis in the following JSON format:

{
  "sceneAnalysis": {
    "spaceType": "reception|office|conference|collaborative|lounge|other",
    "confidence": 0.95,
    "style": "modern|contemporary|traditional|industrial|scandinavian|etc",
    "colorPalette": ["#hexcode1", "#hexcode2", "#hexcode3"]
  },
  "detectedObjects": [
    {
      "name": "Exact product name or description",
      "confidence": 0.9,
      "boundingBox": { "x": 0.25, "y": 0.35, "width": 0.15, "height": 0.20 },
      "suggestedCategory": "seating|furniture|lighting|technology|acoustics|flooring|wall-systems|storage|textiles|art-decor",
      "estimatedPrice": "$1200" or "Custom Quote"
    }
  ],
  "suggestions": [
    {
      "x": 25.5,
      "y": 45.2,
      "productName": "Herman Miller Aeron Chair",
      "category": "seating",
      "confidence": 0.85,
      "reasoning": "Ergonomic mesh chair visible in foreground, distinctive design suggests premium office seating"
    }
  ]
}

Focus on:
1. Identify all visible furniture, fixtures, lighting, technology, and design elements
2. Suggest 3-5 optimal product tagging locations (high-value, clearly visible items)
3. Use x,y coordinates as percentages from top-left (0,0) to bottom-right (100,100)
4. Prioritize items that would be most interesting to potential clients
5. Include reasoning for each suggestion
6. Estimate realistic price ranges based on apparent quality and brand recognition

Be specific about product names when recognizable brands/models are visible.
`

    const response = await openai.chat.completions.create({
      model: "gpt-4-vision-preview",
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: analysisPrompt },
            {
              type: "image_url",
              image_url: {
                url: imageUrl,
                detail: "high"
              }
            }
          ]
        }
      ],
      max_tokens: 2000,
      temperature: 0.1 // Lower temperature for more consistent analysis
    })

    const content = response.choices[0]?.message?.content

    if (!content) {
      throw new Error('No analysis content returned')
    }

    // Extract JSON from response (GPT sometimes adds extra text)
    const jsonMatch = content.match(/\{[\s\S]*\}/)
    if (!jsonMatch) {
      throw new Error('Invalid JSON format in response')
    }

    const analysisResult = JSON.parse(jsonMatch[0])

    // Validate and enhance the response
    const enhancedResult = {
      detectedObjects: analysisResult.detectedObjects || [],
      sceneAnalysis: {
        spaceType: analysisResult.sceneAnalysis?.spaceType || 'office',
        confidence: analysisResult.sceneAnalysis?.confidence || 0.5,
        style: analysisResult.sceneAnalysis?.style || 'modern',
        colorPalette: analysisResult.sceneAnalysis?.colorPalette || ['#888888']
      },
      suggestions: (analysisResult.suggestions || []).map((suggestion: any) => ({
        ...suggestion,
        confidence: Math.min(suggestion.confidence || 0.5, 0.95) // Cap confidence at 95%
      }))
    }

    return NextResponse.json(enhancedResult)

  } catch (error) {
    console.error('Image analysis error:', error)
    
    // Fallback mock response for development/testing
    if (process.env.NODE_ENV === 'development') {
      const mockResponse = {
        sceneAnalysis: {
          spaceType: 'office',
          confidence: 0.85,
          style: 'modern',
          colorPalette: ['#f8f9fa', '#343a40', '#007bff']
        },
        detectedObjects: [
          {
            name: 'Ergonomic Office Chair',
            confidence: 0.9,
            boundingBox: { x: 0.25, y: 0.35, width: 0.15, height: 0.25 },
            suggestedCategory: 'seating',
            estimatedPrice: '$800-1200'
          },
          {
            name: 'Height-Adjustable Desk',
            confidence: 0.85,
            boundingBox: { x: 0.15, y: 0.45, width: 0.40, height: 0.20 },
            suggestedCategory: 'furniture',
            estimatedPrice: '$1200-1800'
          }
        ],
        suggestions: [
          {
            x: 32.5,
            y: 47.5,
            productName: 'Herman Miller Sayl Chair',
            category: 'seating',
            confidence: 0.85,
            reasoning: 'Distinctive Y-shaped back design visible, appears to be ergonomic task seating'
          },
          {
            x: 65.0,
            y: 55.0,
            productName: 'Standing Desk Converter',
            category: 'furniture',
            confidence: 0.75,
            reasoning: 'Height-adjustable mechanism visible, promotes workplace wellness'
          }
        ]
      }
      
      return NextResponse.json(mockResponse)
    }

    return NextResponse.json(
      { error: 'Failed to analyze image' }, 
      { status: 500 }
    )
  }
} 