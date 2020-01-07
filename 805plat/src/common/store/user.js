const state = {
	token:""
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
		state.token = data
	},
}

export default {
	state,
	mutations,
	actions,
}