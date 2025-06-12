import React, { useState } from 'react'

interface AIAnalysisResult {
  detectedObjects: Array<{
    name: string
    confidence: number
    boundingBox: {
      x: number
      y: number
      width: number
      height: number
    }
    suggestedCategory: string
    estimatedPrice?: string
  }>
  sceneAnalysis: {
    spaceType: string
    confidence: number
    style: string
    colorPalette: string[]
  }
  suggestions: Array<{
    x: number
    y: number
    productName: string
    category: string
    confidence: number
    reasoning: string
  }>
}

interface Props {
  imageUrl: string
  onSuggestionsGenerated: (suggestions: AIAnalysisResult['suggestions']) => void
  isAnalyzing?: boolean
}

export function AIImageAnalysis({ imageUrl, onSuggestionsGenerated, isAnalyzing = false }: Props) {
  const [analysisResult, setAnalysisResult] = useState<AIAnalysisResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const analyzeImage = async () => {
    setIsLoading(true)
    setError(null)

    try {
      // Option 1: OpenAI GPT-4 Vision API
      const response = await fetch('/api/analyze-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          imageUrl,
          prompts: [
            "Identify all furniture, fixtures, and design elements in this interior space",
            "Determine the type of space (reception, office, conference room, etc.)",
            "Suggest optimal locations for product tagging hotspots",
            "Estimate the style and design aesthetic"
          ]
        })
      })

      if (!response.ok) throw new Error('Analysis failed')

      const result: AIAnalysisResult = await response.json()
      setAnalysisResult(result)
      onSuggestionsGenerated(result.suggestions)

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Analysis failed')
    } finally {
      setIsLoading(false)
    }
  }

  const applySuggestion = (suggestion: AIAnalysisResult['suggestions'][0]) => {
    // This would trigger the product tagging dialog with pre-filled data
    onSuggestionsGenerated([suggestion])
  }

  return (
    <div style={{ 
      padding: '16px', 
      backgroundColor: '#f0f8ff', 
      border: '1px solid #4a90e2', 
      borderRadius: '8px',
      marginBottom: '16px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
        <h4 style={{ margin: 0, color: '#2c3e50' }}>
          🤖 AI-Powered Product Detection
        </h4>
        <button
          onClick={analyzeImage}
          disabled={isLoading || isAnalyzing}
          style={{
            padding: '8px 16px',
            backgroundColor: isLoading ? '#95a5a6' : '#4a90e2',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          {isLoading ? (
            <>
              <div style={{
                width: '16px',
                height: '16px',
                border: '2px solid #ffffff',
                borderTop: '2px solid transparent',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }} />
              Analyzing...
            </>
          ) : (
            <>🔍 Analyze Image</>
          )}
        </button>
      </div>

      {error && (
        <div style={{ 
          padding: '8px', 
          backgroundColor: '#fee', 
          border: '1px solid #fcc',
          borderRadius: '4px',
          color: '#c33',
          fontSize: '14px'
        }}>
          {error}
        </div>
      )}

      {analysisResult && (
        <div style={{ marginTop: '16px' }}>
          
          {/* Scene Analysis */}
          <div style={{ marginBottom: '16px' }}>
            <h5 style={{ margin: '0 0 8px 0', color: '#2c3e50' }}>Scene Analysis</h5>
            <div style={{ fontSize: '14px', color: '#666' }}>
              <div><strong>Space Type:</strong> {analysisResult.sceneAnalysis.spaceType} ({Math.round(analysisResult.sceneAnalysis.confidence * 100)}% confidence)</div>
              <div><strong>Style:</strong> {analysisResult.sceneAnalysis.style}</div>
              <div><strong>Color Palette:</strong> {analysisResult.sceneAnalysis.colorPalette.join(', ')}</div>
            </div>
          </div>

          {/* Detected Objects */}
          <div style={{ marginBottom: '16px' }}>
            <h5 style={{ margin: '0 0 8px 0', color: '#2c3e50' }}>
              Detected Objects ({analysisResult.detectedObjects.length})
            </h5>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px' }}>
              {analysisResult.detectedObjects.map((obj, index) => (
                <div key={index} style={{
                  padding: '8px',
                  backgroundColor: 'white',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '12px'
                }}>
                  <div><strong>{obj.name}</strong></div>
                  <div>Category: {obj.suggestedCategory}</div>
                  <div>Confidence: {Math.round(obj.confidence * 100)}%</div>
                  {obj.estimatedPrice && <div>Est. Price: {obj.estimatedPrice}</div>}
                </div>
              ))}
            </div>
          </div>

          {/* AI Suggestions */}
          <div>
            <h5 style={{ margin: '0 0 8px 0', color: '#2c3e50' }}>
              Tagging Suggestions ({analysisResult.suggestions.length})
            </h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {analysisResult.suggestions.map((suggestion, index) => (
                <div key={index} style={{
                  padding: '12px',
                  backgroundColor: 'white',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
                      {suggestion.productName}
                    </div>
                    <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>
                      {suggestion.category} • Position: {suggestion.x.toFixed(1)}%, {suggestion.y.toFixed(1)}%
                    </div>
                    <div style={{ fontSize: '11px', color: '#888' }}>
                      {suggestion.reasoning}
                    </div>
                  </div>
                  <div style={{ marginLeft: '12px' }}>
                    <div style={{ 
                      fontSize: '12px', 
                      color: suggestion.confidence > 0.8 ? '#27ae60' : suggestion.confidence > 0.6 ? '#f39c12' : '#e74c3c',
                      marginBottom: '4px'
                    }}>
                      {Math.round(suggestion.confidence * 100)}% confidence
                    </div>
                    <button
                      onClick={() => applySuggestion(suggestion)}
                      style={{
                        padding: '4px 8px',
                        backgroundColor: '#27ae60',
                        color: 'white',
                        border: 'none',
                        borderRadius: '3px',
                        fontSize: '11px',
                        cursor: 'pointer'
                      }}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
} 