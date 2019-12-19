import axios from 'axios'
import store from '@/common/store'
//import router, { loginUrl } from '@/common/router'
import qs from 'qs'

const instance = axios.create({
	// baseURL: "/"
	// withCredentials: true,
})

export const post = (api, data) => {
	data = addCurrentUserParam(data)
	if (!(data instanceof FormData)) {
		data = qs.stringify(data)
	}
	return new Promise((resolve, reject) => {
		instance.post(api.url, data).then(response => {
			resolve(response)
		}).catch(error => {
			reject(error)
		})
	})
}

export const get = (api, data) => {
	//data = addCurrentUserParam(data)
	if (!(data instanceof FormData)) {
		data = qs.stringify(data)
	}
	return new Promise((resolve, reject) => {
		instance.get(api.url, data).then(response => {
			resolve(response)
		}).catch(error => {
			reject(error)
		})
	})
}

const addCurrentUserParam = (data = {}) => {
	const current = store.state.user.current
	if (current) {
			const token = current.token		
		if (token) {
			if (data instanceof FormData) {
				data.append('token', token)
			} else {
				data.token = token
			}
		}
	}
	return data
}