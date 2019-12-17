import Vue from 'vue'
import Router from 'vue-router'
import Rank from '@/views/Rank/router'
import Rewards from '@/views/Rewards/router'
import Mine from '@/views/Mine/router'
import store from '@/common/store'

Vue.use(Router)
const routes = [
	...Rank,
    ...Rewards,
	...Mine
]

export const keepAlives = routes.filter(r => r.meta && r.meta.keepalive === true).map(r => r.name)

const loginUrl="";
const router = new Router({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes,
})

router.beforeEach((to, from, next) => {	
	if (to.meta.auth !== false && !hasAuth()) {
		let returnpath=window.location.href;
		window.location.href=loginUrl+"?returnpage="+returnpath;
	}
	next()
})


const hasAuth = () => {
	const currentUser = store.state.user.current
	return currentUser && currentUser.user_id && currentUser.token
}

export default router