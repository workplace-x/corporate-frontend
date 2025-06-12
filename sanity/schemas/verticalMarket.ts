import { defineField, defineType } from 'sanity'

export const verticalMarket = defineType({
  name: 'verticalMarket',
  title: 'Vertical Market',
  type: 'document',
  icon: () => '🏢',
  fields: [
    defineField({
      name: 'name',
      title: 'Market Name',
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
      name: 'headline',
      title: 'Market Headline',
      type: 'string',
      description: 'Main headline for this vertical market'
    }),
    defineField({
      name: 'overviewParagraph',
      title: 'Overview',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Introduction paragraph for this market'
    }),
    defineField({
      name: 'menuIcon',
      title: 'Menu Icon',
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
    
    // Content Sections (AI-enhanced from multiple title/paragraph fields)
    defineField({
      name: 'sections',
      title: 'Content Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'contentSection',
          title: 'Content Section',
          fields: [
            {
              name: 'title',
              title: 'Section Title',
              type: 'string'
            },
            {
              name: 'content',
              title: 'Section Content',
              type: 'array',
              of: [{ type: 'block' }]
            },
            {
              name: 'featuredImage',
              title: 'Featured Image',
              type: 'image',
              options: { hotspot: true },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative Text'
                }
              ]
            }
          ],
          preview: {
            select: {
              title: 'title',
              media: 'featuredImage'
            }
          }
        }
      ]
    }),
    
    // Relationship Fields
    defineField({
      name: 'featuredProducts',
      title: 'Featured Products',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
      description: 'Products highlighted for this vertical market'
    }),
    defineField({
      name: 'featuredProjects',
      title: 'Featured Projects', 
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
      description: 'Showcase projects for this market'
    }),
    defineField({
      name: 'featuredManufacturers',
      title: 'Featured Manufacturers',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'manufacturer' }] }],
      description: 'Key manufacturer partners for this market'
    }),
    defineField({
      name: 'team',
      title: 'Market Team',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'teamMember' }] }],
      description: 'Team members specializing in this market'
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
      title: 'Market Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'AI-generated tags for this market'
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
    
    // Display and Publishing
    defineField({
      name: 'featured',
      title: 'Featured Market',
      type: 'boolean',
      description: 'Show prominently on homepage'
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Order for displaying markets'
    })
  ],
  
  preview: {
    select: {
      title: 'name',
      subtitle: 'headline',
      media: 'menuIcon'
    }
  },
  
  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrderAsc',
      by: [
        { field: 'displayOrder', direction: 'asc' },
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