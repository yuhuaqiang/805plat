const state = {
	current: {},
}

const actions = {
	_currentUser({
		commit
	}, active) {		
		commit('@user/current', active)
	},
}

const mutations = {
	'@user/current'(state, data) {
		state.current = data
	},
}

export default {
	state,
	mutations,
	actions,
}