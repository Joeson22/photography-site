import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './scss/main.scss';

import VueRouter from 'vue-router';

import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';
import ContactView from './views/ContactView.vue';
import NotFoundView from './views/NotFoundView.vue';

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/contact', component: ContactView },
    { path: '*', component: NotFoundView },
    
  ]
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
