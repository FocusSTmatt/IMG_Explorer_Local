import {defineCliConfig} from 'sanity/cli'
import { deskTool } from 'sanity/desk'

export default defineCliConfig({
  api: {
    projectId: 'p17fts5e',
    dataset: 'production'
  },
  plugins: [
    deskTool() // use defaults
  ]
})
