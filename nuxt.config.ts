// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  alias: {
    "@": resolve(__dirname, "/"),
  },
  css: ["~/assets/css/main.scss"],
  modules: [
    '@element-plus/nuxt',
    '@sidebase/nuxt-session',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore',
        ],
      },
    ],
    '@sidebase/nuxt-auth'
  ],
  build: {
    transpile: ['jsonwebtoken']
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  elementPlus: {
    icon: 'ElIcon',
    importStyle: 'scss',
  },
  auth: {
    provider: {
      type: 'local',
      endpoints: {
        getSession: { path: '/user' }
      },
      pages: {
        login: '/auth/login'
      },
      token: {
        signInResponseTokenPointer: '/token/accessToken'
      },
      sessionDataType: { id: 'string', email: 'string', name: 'string', role: 'admin | guest | account', subscriptions: "{ id: number, status: 'ACTIVE' | 'INACTIVE' }[]" }
    },
    session: {
      // Whether to refresh the session every time the browser window is refocused.
      enableRefreshOnWindowFocus: false,

      // Whether to refresh the session every `X` milliseconds. Set this to `false` to turn it off. The session will only be refreshed if a session already exists.
      // enableRefreshPeriodically: 5000
    },
    globalAppMiddleware: {
      isEnabled: true
    },
    globalMiddlewareOptions: {
      allow404WithoutAuth: true, // Defines if the 404 page will be accessible while unauthenticated
      addDefaultCallbackUrl: '/' // Where authenticated user will be redirected to by default
    }
  }
})