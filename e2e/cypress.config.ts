import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run marianna-html-experiment:serve',
        production: 'nx run marianna-html-experiment:preview',
      },
      ciWebServerCommand: 'nx run marianna-html-experiment:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
