import Mine from '@/views/Mine/Home.vue'
import Setting from '@/views/Mine/Setting.vue'
import Purchase from '@/views/Mine/Purchase.vue'
import Coupon from '@/views/Mine/Coupon.vue'
export default [
{
    path: '/',
    name: 'Mine',
    component: Mine,
    meta: {
        sort: 4001,
    },
},
{
    path: '/mine/setting',
    name: 'Setting',
    component: Setting,
    meta: {
        sort: 4002,
    },
},
{
    path: '/mine/Purchase',
    name: 'Purchase',
    component: Purchase,
    meta: {
       
    },
},
{
    path: '/mine/Coupon',
    name: 'Coupon',
    component: Coupon,
    meta: {
        
    },
},

]