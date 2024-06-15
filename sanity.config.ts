'use client'

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

import {apiVersion, dataset, projectId} from './sanity/env'
import schemas from './sanity/schemas'


const config = defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  schema: { types: schemas },
  plugins: [
    structureTool(),
    visionTool({defaultApiVersion: apiVersion}),
  ],
})

export default config
