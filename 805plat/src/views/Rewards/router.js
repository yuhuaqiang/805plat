import Rewards from '@/views/Rewards/Home.vue'
import Shopdetail from '@/views/Rewards/Shopdetail.vue'
export default [
    {
        path: '/rewards',
        name: 'Rewards',
        component: Rewards,
        meta: {
            sort: 3001,
        },
    },
    {
        path: '/rewards/shopdetail',
        name: 'Shopdetail',
        component: Shopdetail,
        meta: {
            sort: 3002,
        },
    },
]