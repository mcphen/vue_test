import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import Categorie from './components/Categorie';
import SingleCategorie from './components/SingleCategorie'
import SingleArticle from './components/SingleArticle'
Vue.use(VueRouter);
Vue.use(require('vue-moment'));

Vue.config.productionTip = false
const router = new VueRouter({
  mode:'history',
  routes: [
    // dynamic segments start with a colon
    { path: '*', component: Categorie, name: 'root' },
    { path: '/categorie', component: SingleCategorie, name:'categorie', props: true },
    { path: '/article', component: SingleArticle, name:'article', props: true },
  ]
})
new Vue({
  vuetify, VueRouter,router,
  render: h => h(App)
}).$mount('#app')
