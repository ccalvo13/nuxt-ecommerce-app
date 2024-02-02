// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, "/"),
  },
  css: ["~/assets/css/main.scss"],
  modules: [
    '@element-plus/nuxt',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore',
        ],
      },
    ],
    // '@sidebase/nuxt-auth'
  ],
  elementPlus: { /** Options */ },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // auth: {
  //   globalAppMiddleware: true,
  //   baseURL: process.env.NUXT_PUBLIC_API_URL,
  //   provider: {
  //       type: 'local',
  //       endpoints: {
  //           signIn: { path: '/login', method: 'post' },
  //           // signOut: { path: '/identity/accounts/logout', method: 'get' },
  //           // signUp: { path: '/identity/accounts/register', method: 'post' },
  //           getSession: { path: '/users/1', method: 'get' }
  //       },
  //       pages: {
  //           login: '/auth/login',
  //       },
  //       token: {
  //           signInResponseTokenPointer: '/token'
  //       },
  //       sessionDataType: {}
  //   },
  //   enableSessionRefreshPeriodically: 5000,
  //   enableSessionRefreshOnWindowFocus: true,
  //   globalMiddlewareOptions: {
  //       allow404WithoutAuth: false, // Defines if the 404 page will be accessible while unauthenticated
  //       addDefaultCallbackUrl: '/', // Where authenticated user will be redirected to by default
  //   }
  // }
})