import Mine from '@/views/Mine/Home.vue'
import Setting from '@/views/Mine/Setting.vue'
export default [
{
    path: '/',
    name: 'Mine',
    component: Mine,
    meta: {
        sort: 4001,
        auth: false,
    },
},
{
    path: '/mine/setting',
    name: 'Setting',
    component: Setting,
    meta: {
        sort: 4002,
        auth: true,
    },
},

]