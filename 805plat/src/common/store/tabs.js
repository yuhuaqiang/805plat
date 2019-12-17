const state = {
	activeTab: "",
}

const actions = {
	_setActiveTab({
		commit
	}, active) {		
		commit('@tabs/activeTab', active)
	},
}

const mutations = {
	'@tabs/activeTab'(state, data) {
		state.activeTab = data
	},
}

export default {
	state,
	mutations,
	actions,
}