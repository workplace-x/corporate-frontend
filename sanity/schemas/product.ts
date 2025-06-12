import { defineField, defineType } from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: () => '📦',
  fields: [
    defineField({
      name: 'title',
      title: 'Product Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      description: 'AI-enhanced product description'
    }),
    defineField({
      name: 'manufacturer',
      title: 'Manufacturer',
      type: 'reference',
      to: [{ type: 'manufacturer' }],
      description: 'Product manufacturer reference'
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text'
        }
      ]
    }),
    defineField({
      name: 'gallery',
      title: 'Product Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text'
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption'
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'category',
      title: 'Product Category',
      type: 'string',
      options: {
        list: [
          { title: 'Seating', value: 'seating' },
          { title: 'Tables', value: 'tables' },
          { title: 'Storage', value: 'storage' },
          { title: 'Lighting', value: 'lighting' },
          { title: 'Accessories', value: 'accessories' },
          { title: 'Workstations', value: 'workstations' },
          { title: 'Lounge', value: 'lounge' },
          { title: 'Systems', value: 'systems' },
        ],
      },
    }),
    defineField({
      name: 'categories',
      title: 'Product Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'productCategory' }] }],
      description: 'Multiple category references'
    }),
    defineField({
      name: 'verticalMarkets',
      title: 'Vertical Markets',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'verticalMarket' }] }],
      description: 'Markets this product serves'
    }),
    defineField({
      name: 'specifications',
      title: 'Specifications',
      type: 'object',
      fields: [
        {
          name: 'dimensions',
          title: 'Dimensions',
          type: 'string',
          placeholder: 'e.g., 30"W x 30"D x 29"H'
        },
        {
          name: 'materials',
          title: 'Materials',
          type: 'array',
          of: [{ type: 'string' }]
        },
        {
          name: 'finishes',
          title: 'Available Finishes',
          type: 'array',
          of: [{ type: 'string' }]
        },
        {
          name: 'weight',
          title: 'Weight',
          type: 'string'
        }
      ]
    }),
    defineField({
      name: 'pricing',
      title: 'Pricing Information',
      type: 'object',
      fields: [
        {
          name: 'msrp',
          title: 'MSRP',
          type: 'number'
        },
        {
          name: 'dealerPrice',
          title: 'Dealer Price',
          type: 'number'
        },
        {
          name: 'leadTime',
          title: 'Lead Time (weeks)',
          type: 'number'
        }
      ]
    }),
    defineField({
      name: 'sustainability',
      title: 'Sustainability Features',
      type: 'object',
      fields: [
        {
          name: 'certifications',
          title: 'Certifications',
          type: 'array',
          of: [{ type: 'string' }],
          options: {
            list: [
              { title: 'GREENGUARD Gold', value: 'greenguard-gold' },
              { title: 'GREENGUARD', value: 'greenguard' },
              { title: 'Cradle to Cradle', value: 'cradle-to-cradle' },
              { title: 'BIFMA e3', value: 'bifma-e3' }
            ]
          }
        },
        {
          name: 'recycledContent',
          title: 'Recycled Content %',
          type: 'number'
        }
      ]
    }),
    defineField({
      name: 'website',
      title: 'Product Website',
      type: 'url',
      description: 'Link to manufacturer product page'
    }),
    defineField({
      name: 'featured',
      title: 'Featured Product',
      type: 'boolean',
      description: 'Whether this product should be featured prominently',
    }),
    
    // AI Enhancement Tracking
    defineField({
      name: 'enhancementMetrics',
      title: 'Enhancement Metrics',
      type: 'object',
      fields: [
        {
          name: 'qualityScore',
          title: 'Content Quality Score',
          type: 'number',
          description: 'AI-calculated quality score (0-100)'
        },
        {
          name: 'lastEnhanced',
          title: 'Last Enhanced',
          type: 'datetime',
          description: 'When content was last AI-enhanced'
        },
        {
          name: 'enhancementCount',
          title: 'Enhancement Count',
          type: 'number',
          description: 'Number of AI enhancements applied'
        }
      ]
    })
  ],
  
  preview: {
    select: {
      title: 'title',
      subtitle: 'manufacturer.name',
      media: 'featuredImage'
    },
  },
  
  orderings: [
    {
      title: 'Name A-Z',
      name: 'nameAsc',
      by: [
        { field: 'title', direction: 'asc' }
      ]
    },
    {
      title: 'Featured First',
      name: 'featuredFirst',
      by: [
        { field: 'featured', direction: 'desc' },
        { field: 'title', direction: 'asc' }
      ]
    },
    {
      title: 'Quality Score',
      name: 'qualityDesc',
      by: [
        { field: 'enhancementMetrics.qualityScore', direction: 'desc' }
      ]
    }
  ]
}) 