import { defineField, defineType } from 'sanity'

export const clientTestimonial = defineType({
  name: 'clientTestimonial',
  title: 'Client Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Client Title/Position',
      type: 'string',
    }),
    defineField({
      name: 'testimonial',
      title: 'Testimonial',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Company Logo',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility.',
        },
      ],
    }),
    defineField({
      name: 'project',
      title: 'Related Project',
      type: 'reference',
      to: [{ type: 'project' }],
      description: 'The project this testimonial relates to',
    }),
    defineField({
      name: 'service',
      title: 'Related Service',
      type: 'reference',
      to: [{ type: 'service' }],
      description: 'The service this testimonial relates to',
    }),
    defineField({
      name: 'verticalMarket',
      title: 'Vertical Market',
      type: 'reference',
      to: [{ type: 'verticalMarket' }],
      description: 'The market/industry this client represents',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
      description: 'Show on homepage or featured testimonials section',
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      options: {
        list: [
          { title: '5 Stars', value: 5 },
          { title: '4 Stars', value: 4 },
          { title: '3 Stars', value: 3 },
          { title: '2 Stars', value: 2 },
          { title: '1 Star', value: 1 },
        ],
      },
      initialValue: 5,
    }),
    defineField({
      name: 'datePublished',
      title: 'Date Published',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'clientName',
      subtitle: 'company',
      media: 'logo',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: `${title} - ${subtitle}`,
        subtitle: 'Client Testimonial',
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Date Published, New',
      name: 'datePublishedDesc',
      by: [{ field: 'datePublished', direction: 'desc' }],
    },
    {
      title: 'Client Name, A-Z',
      name: 'clientNameAsc',
      by: [{ field: 'clientName', direction: 'asc' }],
    },
  ],
}) 