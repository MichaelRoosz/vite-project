import { createSSRApp, defineAsyncComponent } from 'vue'
import App from './App.vue'

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
export function createApp() {
  const app = createSSRApp(App)

  app.component('Test1', defineAsyncComponent(() =>
    import('./Test1.vue')
  ))

  app.component('Test2', defineAsyncComponent(() =>
    import('./Test2.vue')
  ))

  return { app }
}
