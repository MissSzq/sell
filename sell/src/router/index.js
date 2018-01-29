import Vue from 'vue'
import Router from 'vue-router'
import goods from '@/components/page/goods'
import ratings from '@/components/page/ratings'
import seller from '@/components/page/seller'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: goods
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    }
  ]
})
