import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { OktaAuth } from '@okta/okta-auth-js'
import OktaVue from '@okta/okta-vue'
import App from './App.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'

import './style.css'

const oktaAuth = new OktaAuth({
  issuer: `https://${import.meta.env.VITE_OKTA_DOMAIN}/oauth2/default`,
  clientId: import.meta.env.VITE_OKTA_CLIENT_ID,
  redirectUri: window.location.origin + '/login/callback',
  scopes: ['openid', 'profile', 'email']
})

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home, meta: { requiresAuth: true } },
    { path: '/login', component: Login },
    { path: '/login/callback', component: Login }
  ]
})

const app = createApp(App)

app.use(router)
app.use(OktaVue, { oktaAuth })

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!(await oktaAuth.isAuthenticated())) {
      oktaAuth.signInWithRedirect({ originalUri: to.fullPath })
    } else {
      next()
    }
  } else {
    next()
  }
})

app.mount('#app')
