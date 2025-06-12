import { defineField, defineType } from 'sanity'

export const partner = defineType({
  name: 'partner',
  title: 'Partner',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Partner Name',
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
      name: 'type',
      title: 'Partner Type',
      type: 'string',
      options: {
        list: [
          { title: 'Architecture Firm', value: 'architecture' },
          { title: 'Design Firm', value: 'design' },
          { title: 'Construction Company', value: 'construction' },
          { title: 'General Contractor', value: 'contractor' },
          { title: 'Technology Partner', value: 'technology' },
          { title: 'Consultant', value: 'consultant' },
          { title: 'Vendor', value: 'vendor' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'url',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Partner',
      type: 'boolean',
      description: 'Whether this partner should be featured prominently',
    }),
  ],
  
  preview: {
    select: {
      title: 'title',
      subtitle: 'type',
    },
  },
}) 