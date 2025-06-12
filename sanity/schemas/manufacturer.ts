import { defineField, defineType } from 'sanity'

export const manufacturer = defineType({
  name: 'manufacturer',
  title: 'Manufacturer',
  type: 'document',
  icon: () => '🏭',
  fields: [
    defineField({
      name: 'name',
      title: 'Manufacturer Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      description: 'AI-enhanced manufacturer description'
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
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
      name: 'website',
      title: 'Website',
      type: 'url'
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {
          name: 'email',
          title: 'Email',
          type: 'email'
        },
        {
          name: 'phone',
          title: 'Phone',
          type: 'string'
        },
        {
          name: 'address',
          title: 'Address',
          type: 'text',
          rows: 3
        },
        {
          name: 'salesContact',
          title: 'Sales Contact',
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Contact Name',
              type: 'string'
            },
            {
              name: 'email',
              title: 'Contact Email',
              type: 'email'
            },
            {
              name: 'phone',
              title: 'Contact Phone',
              type: 'string'
            }
          ]
        }
      ]
    }),
    
    // Product Portfolio
    defineField({
      name: 'productCategories',
      title: 'Product Categories',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Seating', value: 'seating' },
          { title: 'Furniture', value: 'furniture' },
          { title: 'Lighting', value: 'lighting' },
          { title: 'Technology', value: 'technology' },
          { title: 'Acoustics', value: 'acoustics' },
          { title: 'Flooring', value: 'flooring' },
          { title: 'Wall Systems', value: 'wall-systems' },
          { title: 'Storage', value: 'storage' },
          { title: 'Textiles', value: 'textiles' },
          { title: 'Art & Décor', value: 'art-decor' }
        ]
      },
      description: 'Categories of products this manufacturer produces'
    }),
    
    // Relationship Fields
    defineField({
      name: 'verticalMarkets',
      title: 'Vertical Markets',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'verticalMarket' }] }],
      description: 'Markets this manufacturer serves'
    }),
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
      description: 'Products from this manufacturer'
    }),
    
    // Business Information
    defineField({
      name: 'companyInfo',
      title: 'Company Information',
      type: 'object',
      fields: [
        {
          name: 'founded',
          title: 'Founded Year',
          type: 'number'
        },
        {
          name: 'headquarters',
          title: 'Headquarters Location',
          type: 'string'
        },
        {
          name: 'employeeCount',
          title: 'Employee Count',
          type: 'string',
          placeholder: 'e.g., 500-1000 or 2,500+'
        },
        {
          name: 'revenue',
          title: 'Annual Revenue',
          type: 'string',
          placeholder: 'e.g., $100M-500M'
        }
      ]
    }),
    
    // Certifications and Sustainability
    defineField({
      name: 'certifications',
      title: 'Certifications',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'GREENGUARD Gold', value: 'greenguard-gold' },
          { title: 'GREENGUARD', value: 'greenguard' },
          { title: 'Cradle to Cradle', value: 'cradle-to-cradle' },
          { title: 'SCS Indoor Air Quality', value: 'scs-indoor-air' },
          { title: 'BIFMA e3', value: 'bifma-e3' },
          { title: 'ISO 14001', value: 'iso-14001' },
          { title: 'Carbon Neutral', value: 'carbon-neutral' }
        ]
      }
    }),
    
    // Partnership Details
    defineField({
      name: 'partnershipLevel',
      title: 'Partnership Level',
      type: 'string',
      options: {
        list: [
          { title: 'Premier Partner', value: 'premier' },
          { title: 'Preferred Partner', value: 'preferred' },
          { title: 'Authorized Dealer', value: 'authorized' },
          { title: 'Distributor', value: 'distributor' },
          { title: 'Strategic Alliance', value: 'strategic' }
        ]
      }
    }),
    defineField({
      name: 'specialties',
      title: 'Specialties',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'What this manufacturer is known for'
    }),
    
    // SEO and Enhancement Fields
    defineField({
      name: 'metaDescription',
      title: 'SEO Meta Description',
      type: 'text',
      rows: 3,
      description: 'AI-generated meta description for SEO'
    }),
    defineField({
      name: 'tags',
      title: 'Manufacturer Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'AI-generated tags for this manufacturer'
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
    }),
    
    // Display and Status
    defineField({
      name: 'featured',
      title: 'Featured Manufacturer',
      type: 'boolean',
      description: 'Show prominently on site'
    }),
    defineField({
      name: 'status',
      title: 'Partnership Status',
      type: 'string',
      options: {
        list: [
          { title: 'Active', value: 'active' },
          { title: 'Preferred', value: 'preferred' },
          { title: 'Inactive', value: 'inactive' }
        ]
      },
      initialValue: 'active'
    })
  ],
  
  preview: {
    select: {
      title: 'name',
      subtitle: 'partnershipLevel',
      media: 'logo'
    }
  },
  
  orderings: [
    {
      title: 'Name A-Z',
      name: 'nameAsc',
      by: [
        { field: 'name', direction: 'asc' }
      ]
    },
    {
      title: 'Partnership Level',
      name: 'partnershipLevel',
      by: [
        { field: 'partnershipLevel', direction: 'asc' },
        { field: 'name', direction: 'asc' }
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