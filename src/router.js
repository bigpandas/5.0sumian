import Vue from 'vue'
import Router from 'vue-router'
import activity from '@/components/activity/activity.vue'
import shopMall from '@/components/shop-mall/shop-mall.vue'
import me from '@/components/me/me.vue'
import msg from '@/components/me/msg.vue'
import login from '@/components/login.vue'
import address from '@/components/index/address.vue'
import set from '@/components/me/set.vue'
import myservice from '@/components/me/myservice.vue'
import userInfo from '@/components/me/userInfo.vue'
import fillProduct from '@/components/fillproduct/fillProduct.vue'
import film from '@/components/index/film.vue'
import cinema from '@/components/index/cinema.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {path:'/',component:film},
    {path:'/film',component:film},
    {path:'/cinema',component:cinema},
    {path:'/activity',component:activity},
    {path:'/shopMall',component:shopMall},
    {path:'/me',component:me},
    {path:'/address',component:address},
    {path:'/set',component:set},
    {path:'/myservice',component:myservice},
    {path:'/userInfo',component:userInfo},
    {path:'/fillProduct',component:fillProduct},
    {path:'/login',component:login},
    {path:'/msg',component:msg},
  ]
})
