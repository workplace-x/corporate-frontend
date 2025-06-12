import { defineField, defineType } from 'sanity'

export const teamMember = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
      options: {
        list: [
          { title: 'Leadership', value: 'leadership' },
          { title: 'Design', value: 'design' },
          { title: 'Project Management', value: 'project-management' },
          { title: 'Business Development', value: 'business-development' },
          { title: 'Operations', value: 'operations' },
          { title: 'Technology', value: 'technology' },
          { title: 'Sales', value: 'sales' },
          { title: 'Customer Service', value: 'customer-service' },
          { title: 'Accounting', value: 'accounting' },
          { title: 'Marketing', value: 'marketing' },
          { title: 'Construction Services', value: 'construction-services' },
          { title: 'Construction Trades', value: 'construction-trades' },
          { title: 'Engineering', value: 'engineering' },
          { title: 'Move', value: 'move' },
          { title: 'Foreman', value: 'foreman' },
          { title: 'Studio Other', value: 'studio-other' },
          { title: 'IT', value: 'it' },
          { title: 'Central Valley', value: 'central-valley' },
          { title: 'Steelcase', value: 'steelcase' },
          { title: 'Ancillary', value: 'ancillary' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'manager',
      title: 'Manager',
      type: 'string',
      description: 'Direct manager or supervisor',
    }),
    defineField({
      name: 'businessUnit',
      title: 'Business Unit',
      type: 'string',
      options: {
        list: [
          { title: 'Contract Furniture', value: 'contract-furniture' },
          { title: 'Construction Trades', value: 'construction-trades' },
          { title: 'Technology', value: 'technology' },
          { title: 'Studio Other', value: 'studio-other' },
        ],
      },
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      options: {
        list: [
          { title: 'San Francisco South (SFS)', value: 'sfs' },
          { title: 'Dallas', value: 'dallas' },
          { title: 'Newport Beach', value: 'newport-beach' },
          { title: 'Fresno', value: 'fresno' },
        ],
      },
    }),
    defineField({
      name: 'yearHired',
      title: 'Year Hired',
      type: 'number',
      validation: (rule) => rule.min(1990).max(new Date().getFullYear()),
    }),
    defineField({
      name: 'almaMater',
      title: 'Alma Mater',
      type: 'string',
      description: 'University or college attended',
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H4', value: 'h4' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'specialties',
      title: 'Specialties',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Areas of expertise',
    }),
    defineField({
      name: 'education',
      title: 'Education',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'experience',
      title: 'Experience',
      type: 'text',
      rows: 3,
      description: 'Years of experience or notable career highlights',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'email',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'headshot',
      title: 'Headshot',
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
      name: 'headshotUrl',
      title: 'Headshot URL (Supabase)',
      type: 'url',
      description: 'Direct URL to employee photo stored in Supabase Storage',
      readOnly: true,
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
      description: 'Show on leadership team or homepage',
    }),
    defineField({
      name: 'boardOfDirectors',
      title: 'Board of Directors',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'seniorLeadership',
      title: 'Senior Leadership',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'unitLeader',
      title: 'Unit Leader',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'executiveTeam',
      title: 'Executive Team',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'salesLeadership',
      title: 'Sales Leadership',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'pacificHoldings',
      title: 'Pacific Holdings',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'pacificHoldingsTitle',
      title: 'Pacific Holdings Title',
      type: 'string',
      hidden: ({ document }) => !document?.pacificHoldings,
    }),
    defineField({
      name: 'archived',
      title: 'Archived',
      type: 'boolean',
      initialValue: false,
      description: 'Hide from public listings but keep data',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'headshot',
    },
  },
}) 