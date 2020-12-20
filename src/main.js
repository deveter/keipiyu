import Vue from 'vue'
import App from './App.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import dashboard from './pages/dashboard.vue'
import integrations from './pages/integrations.vue'
import products from './pages/products.vue'
import facebookAds from './pages/facebookads.vue'
import googleAds from './pages/googleads.vue'
import instagram from './pages/instagram.vue'
import analytics from './pages/analytics.vue'
import profile from './pages/profile.vue'
import goals from './pages/goals.vue'


const router=new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[{
    path:'/',
    component:dashboard 
  },
   {path:'/integrations',
    component:integrations
  },
  {
    path:'/products',
    component:products    
  },
  {
    path:'/facebook-ads',
    component:facebookAds
  },
  {
    path:'/google-ads',
    component:googleAds
  },
  {
    path:'/instagram',
    component:instagram
  },
 
  {
    path:'/analytics',
    component:analytics
  },
 {
    path:'/goals',
    component:goals
  },
  {
    path:'/profile',
    component:profile
  }]
})
Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
