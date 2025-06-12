import { defineField, defineType } from 'sanity'
import { ImageAnnotationInput } from '../components/ImageAnnotationInput'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
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
      name: 'subHeader',
      title: 'Sub Header',
      type: 'text',
      rows: 2,
      description: 'Brief project description for listing pages',
    }),
    defineField({
      name: 'businessUnit',
      title: 'Business Unit',
      type: 'string',
      options: {
        list: [
          { title: 'Contract Furniture', value: 'contract-furniture' },
          { title: 'Architectural Walls', value: 'architectural-walls' },
          { title: 'Construction Trades', value: 'construction-trades' },
          { title: 'Studio Other', value: 'studio-other' },
          { title: 'Technology', value: 'technology' },
          { title: 'Ancillary', value: 'ancillary' },
        ],
      },
    }),
    defineField({
      name: 'verticalMarket',
      title: 'Vertical Market',
      type: 'string',
      options: {
        list: [
          { title: 'Corporate', value: 'corporate' },
          { title: 'Higher Education', value: 'higher-education' },
          { title: 'K-12 Education', value: 'k-12-education' },
          { title: 'Healthcare', value: 'healthcare' },
          { title: 'Workplace', value: 'workplace' },
        ],
      },
    }),
    defineField({
      name: 'team',
      title: 'Team Members',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'teamMember' }],
        },
      ],
      description: 'Team members who worked on this project',
    }),
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'product' }],
        },
      ],
      description: 'Products used in this project',
    }),
    defineField({
      name: 'featuredProducts',
      title: 'Featured Products',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'product' }],
        },
      ],
      description: 'Highlighted products for this project',
    }),
    defineField({
      name: 'partners',
      title: 'Partners',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'partner' }],
        },
      ],
      description: 'Partner organizations involved in this project',
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Contract Furniture', value: 'contract-furniture' },
          { title: 'Architectural Walls', value: 'architectural-walls' },
          { title: 'Construction Trades', value: 'construction-trades' },
          { title: 'Studio Other', value: 'studio-other' },
          { title: 'Technology', value: 'technology' },
          { title: 'Ancillary', value: 'ancillary' },
          { title: 'Construction Services', value: 'construction-services' },
        ],
      },
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        {
          name: 'street',
          title: 'Street Address',
          type: 'string',
        },
        {
          name: 'cityState',
          title: 'City, State',
          type: 'string',
        },
        {
          name: 'coordinates',
          title: 'Coordinates',
          type: 'object',
          fields: [
            {
              name: 'lat',
              title: 'Latitude',
              type: 'number',
            },
            {
              name: 'lng',
              title: 'Longitude',
              type: 'number',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'region',
      title: 'Tangram Region',
      type: 'string',
    }),
    defineField({
      name: 'industryType',
      title: 'Industry Type',
      type: 'string',
      options: {
        list: [
          { title: 'Creative', value: 'creative' },
          { title: 'Professional Services', value: 'professional-services' },
          { title: 'Healthcare', value: 'healthcare' },
          { title: 'Education', value: 'education' },
          { title: 'Hospitality', value: 'hospitality' },
          { title: 'Technology', value: 'technology' },
        ],
      },
    }),
    defineField({
      name: 'squareFootage',
      title: 'Square Footage',
      type: 'string',
      description: 'e.g., "5,800 sq. ft" or "32,974 sq. ft"',
    }),
    defineField({
      name: 'yearCompleted',
      title: 'Year Completed',
      type: 'number',
      validation: (rule) => rule.min(1900).max(new Date().getFullYear() + 5),
    }),
    defineField({
      name: 'writeUp',
      title: 'Project Write Up',
      type: 'text',
      rows: 10,
      description: 'Detailed project description and case study content',
    }),
    
    // New Rich Text Project Writeup Field
    defineField({
      name: 'projectWriteUp',
      title: 'Rich Text Project Story',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Number', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
          },
        },
      ],
      description: 'Rich text content for the project case study narrative',
    }),

    // NEW: Tagged Images System
    defineField({
      name: 'taggedImages',
      title: 'Tagged Project Images',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'taggedImage',
          title: 'Tagged Image',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative Text',
                  description: 'Important for SEO and accessibility',
                },
              ],
              validation: (rule) => rule.required(),
            },
            {
              name: 'title',
              title: 'Image Title',
              type: 'string',
              placeholder: 'e.g., Reception & Welcome Area',
              validation: (rule) => rule.required(),
            },
            {
              name: 'description',
              title: 'Image Description',
              type: 'text',
              rows: 3,
              placeholder: 'e.g., First impressions matter - biophilic design meets modern hospitality',
            },
            {
              name: 'spaceType',
              title: 'Space Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Reception Area', value: 'reception' },
                  { title: 'Collaborative Workspace', value: 'collaborative' },
                  { title: 'Conference Room', value: 'conference' },
                  { title: 'Private Office', value: 'private-office' },
                  { title: 'Open Office', value: 'open-office' },
                  { title: 'Break Room', value: 'break-room' },
                  { title: 'Lobby', value: 'lobby' },
                  { title: 'Exterior', value: 'exterior' },
                  { title: 'Other', value: 'other' },
                ],
              },
            },
            {
              name: 'productTags',
              title: 'Product Tags',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'productTag',
                  title: 'Product Tag',
                  fields: [
                    {
                      name: 'x',
                      title: 'X Position (%)',
                      type: 'number',
                      validation: (rule) => rule.min(0).max(100).required(),
                      description: 'Horizontal position as percentage (0-100)',
                    },
                    {
                      name: 'y',
                      title: 'Y Position (%)',
                      type: 'number',
                      validation: (rule) => rule.min(0).max(100).required(),
                      description: 'Vertical position as percentage (0-100)',
                    },
                    {
                      name: 'product',
                      title: 'Product Reference',
                      type: 'reference',
                      to: [{ type: 'product' }],
                      description: 'Link to existing product in CMS',
                    },
                    {
                      name: 'customProduct',
                      title: 'Custom Product Info',
                      type: 'object',
                      fields: [
                        {
                          name: 'name',
                          title: 'Product Name',
                          type: 'string',
                          placeholder: 'e.g., Steelcase Gesture Chair',
                        },
                        {
                          name: 'category',
                          title: 'Category',
                          type: 'string',
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
                              { title: 'Art & Décor', value: 'art-decor' },
                            ],
                          },
                        },
                        {
                          name: 'price',
                          title: 'Price',
                          type: 'string',
                          placeholder: 'e.g., $1,200 or Custom Quote',
                        },
                        {
                          name: 'partner',
                          title: 'Partner/Manufacturer',
                          type: 'string',
                          placeholder: 'e.g., Steelcase, Herman Miller',
                        },
                        {
                          name: 'specifications',
                          title: 'Key Specifications',
                          type: 'text',
                          rows: 2,
                          placeholder: 'e.g., Ergonomic task chair with LiveBack technology',
                        },
                        {
                          name: 'sustainability',
                          title: 'Sustainability Features',
                          type: 'text',
                          rows: 2,
                          placeholder: 'e.g., GREENGUARD Gold certified, recyclable materials',
                        },
                      ],
                      description: 'Use this if the product is not in the CMS or for custom items',
                    },
                  ],
                  preview: {
                    select: {
                      productName: 'product.name',
                      customName: 'customProduct.name',
                      x: 'x',
                      y: 'y',
                    },
                    prepare(selection) {
                      const { productName, customName, x, y } = selection
                      return {
                        title: productName || customName || 'Unnamed Product',
                        subtitle: `Position: ${x}%, ${y}%`,
                      }
                    },
                  },
                },
              ],
              description: 'Click positions and product information for interactive hotspots',
              components: {
                input: (props: any) => {
                  // Get the parent image URL for AI analysis
                  const imageUrl = props.parent?.image?.asset?._ref 
                    ? `https://cdn.sanity.io/images/4q7mxake/production/${props.parent.image.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png')}`
                    : undefined
                  
                  return ImageAnnotationInput({
                    value: props.value,
                    onChange: props.onChange,
                    imageUrl
                  })
                }
              }
            },
            {
              name: 'metrics',
              title: 'Space Metrics',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'metric',
                      title: 'Metric Name',
                      type: 'string',
                      placeholder: 'e.g., Visitor Satisfaction',
                    },
                    {
                      name: 'value',
                      title: 'Value',
                      type: 'string',
                      placeholder: 'e.g., 96%',
                    },
                    {
                      name: 'change',
                      title: 'Change/Improvement',
                      type: 'string',
                      placeholder: 'e.g., +23%',
                    },
                  ],
                },
              ],
              description: 'Performance metrics for this space (optional)',
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
              media: 'image',
            },
          },
        },
      ],
      description: 'Interactive images with product tagging and metrics',
    }),

    // Legacy Image Fields (for migration)
    defineField({
      name: 'imageOne',
      title: 'Image One (Legacy)',
      type: 'url',
      description: 'Legacy field - use Tagged Images instead',
      hidden: true,
    }),
    defineField({
      name: 'imageTwo',
      title: 'Image Two (Legacy)',
      type: 'url',
      hidden: true,
    }),
    defineField({
      name: 'imageThree',
      title: 'Image Three (Legacy)',
      type: 'url',
      hidden: true,
    }),
    defineField({
      name: 'imageFour',
      title: 'Image Four (Legacy)',
      type: 'url',
      hidden: true,
    }),
    defineField({
      name: 'imageFive',
      title: 'Image Five (Legacy)',
      type: 'url',
      hidden: true,
    }),

    // Simple Image Gallery (Alternative to tagged images)
    defineField({
      name: 'images',
      title: 'Project Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
      description: 'Simple image gallery (fallback if tagged images not used)',
    }),

    defineField({
      name: 'seoSummary',
      title: 'SEO Summary',
      type: 'text',
      rows: 3,
      description: 'Meta description for search engines',
    }),
    defineField({
      name: 'googleReference',
      title: 'Google Reference',
      type: 'boolean',
      description: 'Whether this project should be referenced in Google',
    }),
    defineField({
      name: 'photographerCredit',
      title: 'Photographer Credit',
      type: 'string',
    }),
    defineField({
      name: 'photographerWebsite',
      title: 'Photographer Website',
      type: 'url',
    }),
    defineField({
      name: 'webflowCollectionId',
      title: 'Webflow Collection ID',
      type: 'string',
      readOnly: true,
      description: 'Original Webflow collection ID for migration tracking',
    }),
    defineField({
      name: 'webflowItemId',
      title: 'Webflow Item ID',
      type: 'string',
      readOnly: true,
      description: 'Original Webflow item ID for migration tracking',
    }),
    defineField({
      name: 'archived',
      title: 'Archived',
      type: 'boolean',
      description: 'Whether this project is archived',
    }),
    defineField({
      name: 'draft',
      title: 'Draft',
      type: 'boolean',
      description: 'Whether this project is in draft status',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subHeader',
      media: 'taggedImages.0.image',
    },
    prepare(selection) {
      const { title, subtitle } = selection
      return {
        title,
        subtitle,
      }
    },
  },
}) 