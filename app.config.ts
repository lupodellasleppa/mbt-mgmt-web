export default defineAppConfig({
  myLayer: {
    name: 'Hello from Nuxt layer',
  },
  nuxtQuasar: {
    brand: {
      primary: '#FFD54F',
      secondary: '#42A5F5',
      accent: '#55ffee',

      dark: '#1d1d1d',
      'dark-page': '#121212',

      positive: '#21BA45',
      negative: '#da4052',
      info: '#94edff',
      warning: '#ff8500',
    },
  },
});

declare module '@nuxt/schema' {
  interface AppConfigInput {
    myLayer?: {
      /** Project name */
      name?: string;
    };
  }
}
