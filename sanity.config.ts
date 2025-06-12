import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'tangram-corporate',
  title: 'Tangram Corporate CMS',

  projectId: '4q7mxake',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Projects')
              .id('projects')
              .child(
                S.documentTypeList('project')
                  .title('Projects')
                  .filter('_type == "project"')
              ),
            S.listItem()
              .title('Team Members')
              .id('team')
              .child(
                S.documentTypeList('teamMember')
                  .title('Team Members')
                  .filter('_type == "teamMember"')
              ),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (listItem) => !['project', 'teamMember'].includes(listItem.getId()!)
            ),
          ])
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
}) 