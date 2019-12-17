import Rewards from '@/views/Rewards/Home.vue'
export default [
    {
        path: '/rewards/home',
        name: 'Rewards',
        component: Rewards,
        meta: {
            sort: 3001,
            auth: false,
        },
    },]