import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  client: '@hey-api/client-axios',
  input: 'src/assets/openapi.json',
  output: {
    format: 'prettier',
    path: 'src/models',
  },
  plugins: [
    '@hey-api/schemas', // preserves default output
    '@hey-api/services', // preserves default output
    {
      enums: 'javascript',
      name: '@hey-api/types',
    },
  ],
});
