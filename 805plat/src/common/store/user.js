const state = {
	token: "489068c86e2f3f8abb54c91b9eeca5d4",
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