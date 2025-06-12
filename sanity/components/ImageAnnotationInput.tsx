import React, { useState, useRef, useCallback } from 'react'
import { AIImageAnalysis } from './AIImageAnalysis'

interface ProductTag {
  x: number
  y: number
  product?: { _ref: string }
  customProduct?: {
    name: string
    category: string
    price: string
    partner: string
    specifications?: string
    sustainability?: string
  }
}

interface AISuggestion {
  x: number
  y: number
  productName: string
  category: string
  confidence: number
  reasoning: string
}

interface Props {
  value?: ProductTag[]
  onChange: (value: ProductTag[]) => void
  imageUrl?: string
}

const PRODUCT_CATEGORIES = [
  { value: 'seating', title: 'Seating' },
  { value: 'furniture', title: 'Furniture' },
  { value: 'lighting', title: 'Lighting' },
  { value: 'technology', title: 'Technology' },
  { value: 'acoustics', title: 'Acoustics' },
  { value: 'flooring', title: 'Flooring' },
  { value: 'wall-systems', title: 'Wall Systems' },
  { value: 'storage', title: 'Storage' },
  { value: 'textiles', title: 'Textiles' },
  { value: 'art-decor', title: 'Art & Décor' },
]

export function ImageAnnotationInput({ value = [], onChange, imageUrl }: Props) {
  const [isTagging, setIsTagging] = useState(false)
  const [selectedTag, setSelectedTag] = useState<number | null>(null)
  const [showProductDialog, setShowProductDialog] = useState(false)
  const [pendingPosition, setPendingPosition] = useState<{ x: number; y: number } | null>(null)
  const [aiSuggestions, setAiSuggestions] = useState<AISuggestion[]>([])
  const [showAISuggestions, setShowAISuggestions] = useState(false)
  const [productForm, setProductForm] = useState({
    name: '',
    category: '',
    price: '',
    partner: '',
    specifications: '',
    sustainability: '',
  })
  const imageRef = useRef<HTMLImageElement>(null)

  const handleImageClick = useCallback((event: React.MouseEvent<HTMLImageElement>) => {
    if (!isTagging || !imageRef.current) return

    const rect = imageRef.current.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100

    setPendingPosition({ x, y })
    setShowProductDialog(true)
  }, [isTagging])

  const handleAISuggestions = useCallback((suggestions: AISuggestion[]) => {
    setAiSuggestions(suggestions)
    setShowAISuggestions(true)
  }, [])

  const applyAISuggestion = useCallback((suggestion: AISuggestion) => {
    const newTag: ProductTag = {
      x: suggestion.x,
      y: suggestion.y,
      customProduct: {
        name: suggestion.productName,
        category: suggestion.category,
        price: 'AI Estimated', // Could be enhanced with price lookup
        partner: 'To be confirmed',
        specifications: suggestion.reasoning,
        sustainability: '',
      },
    }

    onChange([...value, newTag])
    
    // Remove applied suggestion
    setAiSuggestions(prev => prev.filter(s => s !== suggestion))
  }, [value, onChange])

  const handleAddProduct = useCallback(() => {
    if (!pendingPosition) return

    const newTag: ProductTag = {
      x: pendingPosition.x,
      y: pendingPosition.y,
      customProduct: {
        name: productForm.name,
        category: productForm.category,
        price: productForm.price,
        partner: productForm.partner,
        specifications: productForm.specifications,
        sustainability: productForm.sustainability,
      },
    }

    onChange([...value, newTag])
    
    // Reset form
    setProductForm({
      name: '',
      category: '',
      price: '',
      partner: '',
      specifications: '',
      sustainability: '',
    })
    setPendingPosition(null)
    setShowProductDialog(false)
    setIsTagging(false)
  }, [pendingPosition, productForm, value, onChange])

  const handleRemoveTag = useCallback((index: number) => {
    const newTags = value.filter((_, i) => i !== index)
    onChange(newTags)
  }, [value, onChange])

  const isFormValid = productForm.name && productForm.category && productForm.price

  if (!imageUrl) {
    return (
      <div style={{ padding: '16px', backgroundColor: '#fef3cd', border: '1px solid #fdd835', borderRadius: '4px' }}>
        <p>Upload an image first to enable product tagging</p>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      
      {/* AI Analysis Section */}
      <AIImageAnalysis 
        imageUrl={imageUrl}
        onSuggestionsGenerated={handleAISuggestions}
        isAnalyzing={false}
      />

      {/* AI Suggestions Preview */}
      {showAISuggestions && aiSuggestions.length > 0 && (
        <div style={{
          padding: '16px',
          backgroundColor: '#e8f5e8',
          border: '1px solid #4caf50',
          borderRadius: '8px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <h4 style={{ margin: 0, color: '#2c3e50' }}>
              🎯 AI Suggestions ({aiSuggestions.length})
            </h4>
            <button
              onClick={() => setShowAISuggestions(false)}
              style={{
                padding: '4px 8px',
                backgroundColor: 'transparent',
                border: '1px solid #666',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Hide
            </button>
          </div>
          <div style={{ fontSize: '14px', color: '#666', marginBottom: '12px' }}>
            Click "Apply" to automatically place tags at AI-suggested locations
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '8px' }}>
            {aiSuggestions.map((suggestion, index) => (
              <div key={index} style={{
                padding: '12px',
                backgroundColor: 'white',
                border: '1px solid #ddd',
                borderRadius: '6px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
                    {suggestion.productName}
                  </div>
                  <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>
                    {suggestion.category} • {Math.round(suggestion.confidence * 100)}% confidence
                  </div>
                  <div style={{ fontSize: '11px', color: '#888' }}>
                    {suggestion.reasoning}
                  </div>
                </div>
                <button
                  onClick={() => applyAISuggestion(suggestion)}
                  style={{
                    padding: '6px 12px',
                    backgroundColor: '#4caf50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '12px',
                    cursor: 'pointer',
                    marginLeft: '12px'
                  }}
                >
                  Apply Tag
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Manual Tagging Controls */}
      <div style={{ 
        padding: '16px', 
        backgroundColor: isTagging ? '#e8f5e8' : '#f5f5f5', 
        border: '1px solid #ddd', 
        borderRadius: '4px' 
      }}>
        <h4 style={{ margin: '0 0 12px 0' }}>Manual Product Tagging</h4>
        <button
          style={{
            padding: '8px 16px',
            backgroundColor: isTagging ? '#dc3545' : '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
          onClick={() => setIsTagging(!isTagging)}
        >
          {isTagging ? 'Stop Tagging' : 'Start Manual Tagging'}
        </button>
        {isTagging && (
          <p style={{ fontSize: '14px', color: '#28a745', margin: '8px 0 0 0' }}>
            Click on the image where you want to place a product tag
          </p>
        )}
      </div>

      {/* Interactive Image */}
      <div style={{ border: '1px solid #ddd', borderRadius: '4px', padding: '8px' }}>
        <div
          style={{
            position: 'relative',
            display: 'inline-block',
            cursor: isTagging ? 'crosshair' : 'default',
          }}
        >
          <img
            ref={imageRef}
            src={imageUrl}
            alt="Project image for tagging"
            style={{
              maxWidth: '100%',
              height: 'auto',
              display: 'block',
            }}
            onClick={handleImageClick}
          />
          
          {/* Existing Product Hotspots */}
          {value.map((tag, index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                left: `${tag.x}%`,
                top: `${tag.y}%`,
                transform: 'translate(-50%, -50%)',
                width: '24px',
                height: '24px',
                backgroundColor: '#f9a31c',
                borderRadius: '50%',
                border: '3px solid white',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                color: 'white',
                fontWeight: 'bold',
                zIndex: 10,
              }}
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation()
                setSelectedTag(selectedTag === index ? null : index)
              }}
            >
              {index + 1}
            </div>
          ))}

          {/* AI Suggestion Hotspots */}
          {showAISuggestions && aiSuggestions.map((suggestion, index) => (
            <div
              key={`ai-${index}`}
              style={{
                position: 'absolute',
                left: `${suggestion.x}%`,
                top: `${suggestion.y}%`,
                transform: 'translate(-50%, -50%)',
                width: '28px',
                height: '28px',
                backgroundColor: '#4caf50',
                borderRadius: '50%',
                border: '3px solid white',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                color: 'white',
                fontWeight: 'bold',
                zIndex: 15,
                animation: 'pulse 2s infinite'
              }}
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation()
                applyAISuggestion(suggestion)
              }}
              title={`AI Suggestion: ${suggestion.productName} (${Math.round(suggestion.confidence * 100)}% confidence)`}
            >
              AI
            </div>
          ))}

          {/* Pending Position Indicator */}
          {pendingPosition && (
            <div
              style={{
                position: 'absolute',
                left: `${pendingPosition.x}%`,
                top: `${pendingPosition.y}%`,
                transform: 'translate(-50%, -50%)',
                width: '24px',
                height: '24px',
                backgroundColor: '#f9a31c',
                borderRadius: '50%',
                border: '3px solid white',
                animation: 'pulse 1s infinite',
                zIndex: 15,
              }}
            />
          )}
        </div>
      </div>

      {/* Tagged Products List */}
      {value.length > 0 && (
        <div style={{ padding: '16px', backgroundColor: '#f9f9f9', border: '1px solid #ddd', borderRadius: '4px' }}>
          <h4 style={{ margin: '0 0 12px 0' }}>Tagged Products ({value.length})</h4>
          {value.map((tag, index) => (
            <div
              key={index}
              style={{
                padding: '12px',
                backgroundColor: selectedTag === index ? '#e8f5e8' : 'white',
                border: '1px solid #ddd',
                borderRadius: '4px',
                marginBottom: '8px',
                cursor: 'pointer'
              }}
              onClick={() => setSelectedTag(selectedTag === index ? null : index)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong>
                  {tag.customProduct?.name || 'Product Reference'} (#{index + 1})
                </strong>
                <button
                  style={{
                    padding: '4px 8px',
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation()
                    handleRemoveTag(index)
                  }}
                >
                  Remove
                </button>
              </div>
              {tag.customProduct && (
                <div style={{ fontSize: '14px', color: '#666', marginTop: '4px' }}>
                  {tag.customProduct.category} • {tag.customProduct.price}
                  {tag.customProduct.partner && ` • ${tag.customProduct.partner}`}
                </div>
              )}
              <div style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>
                Position: {tag.x.toFixed(1)}%, {tag.y.toFixed(1)}%
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Product Information Dialog */}
      {showProductDialog && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '8px',
              width: '90%',
              maxWidth: '500px',
              maxHeight: '80vh',
              overflow: 'auto',
            }}
          >
            <h3 style={{ margin: '0 0 16px 0' }}>Add Product Information</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <input
                type="text"
                placeholder="Product Name (e.g., Steelcase Gesture Chair)"
                value={productForm.name}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => 
                  setProductForm(prev => ({ ...prev, name: event.target.value }))
                }
                style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
              />
              
              <select
                value={productForm.category}
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) => 
                  setProductForm(prev => ({ ...prev, category: event.target.value }))
                }
                style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
              >
                <option value="">Select Category</option>
                {PRODUCT_CATEGORIES.map(cat => (
                  <option key={cat.value} value={cat.value}>{cat.title}</option>
                ))}
              </select>

              <input
                type="text"
                placeholder="Price (e.g., $1,200 or Custom Quote)"
                value={productForm.price}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => 
                  setProductForm(prev => ({ ...prev, price: event.target.value }))
                }
                style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
              />

              <input
                type="text"
                placeholder="Partner/Manufacturer (e.g., Steelcase)"
                value={productForm.partner}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => 
                  setProductForm(prev => ({ ...prev, partner: event.target.value }))
                }
                style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
              />

              <textarea
                placeholder="Key Specifications (optional)"
                value={productForm.specifications}
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => 
                  setProductForm(prev => ({ ...prev, specifications: event.target.value }))
                }
                rows={2}
                style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px', resize: 'vertical' }}
              />

              <textarea
                placeholder="Sustainability Features (optional)"
                value={productForm.sustainability}
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => 
                  setProductForm(prev => ({ ...prev, sustainability: event.target.value }))
                }
                rows={2}
                style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px', resize: 'vertical' }}
              />
            </div>

            <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
              <button
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#6c757d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
                onClick={() => {
                  setShowProductDialog(false)
                  setPendingPosition(null)
                  setIsTagging(false)
                }}
              >
                Cancel
              </button>
              <button
                style={{
                  padding: '8px 16px',
                  backgroundColor: isFormValid ? '#28a745' : '#6c757d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: isFormValid ? 'pointer' : 'not-allowed'
                }}
                disabled={!isFormValid}
                onClick={handleAddProduct}
              >
                Add Product Tag
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.7; transform: translate(-50%, -50%) scale(1.2); }
          100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>
    </div>
  )
} 