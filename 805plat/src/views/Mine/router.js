import Mine from '@/views/Mine/Home.vue'
import Setting from '@/views/Mine/Setting.vue'
import Purchase from '@/views/Mine/Purchase.vue'
import Coupon from '@/views/Mine/Coupon.vue'
import BindingPhone from '@/views/Mine/Binding_mobile_phone.vue'
import Address from '@/views/Mine/Address.vue'
import Realname from '@/views/Mine/Realname.vue'
import Bean from '@/views/Mine/Bean.vue'
import Point from '@/views/Mine/Point.vue'
export default [
{
    path: '/',
    name: 'Mine',
    component: Mine,
    meta: {
        sort: 4001,
        keepalive: true,
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
{
    path: '/mine/setting/phone',
    name: 'BindingPhone',
    component: BindingPhone,
    meta: {
        sort: 4003,
    },
},
{
    path: '/mine/setting/realname',
    name: 'Realname',
    component: Realname,
    meta: {
        sort: 4004,
    },
},
{
    path: '/mine/setting/address',
    name: 'Address',
    component: Address,
    meta: {
        sort: 4005,
    },
},
{
    path: '/mine/Bean',
    name: 'Bean',
    component: Bean,
    meta: {
    },
},
{
    path: '/mine/Point',
    name: 'Point',
    component: Point,
    meta: {
    },
},

]