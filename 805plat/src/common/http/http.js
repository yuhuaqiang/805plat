import axios from 'axios'
import store from '@/common/store'
import router, { loginUrl } from '@/common/router'
import qs from 'qs'

const instance = axios.create({
	// baseURL: baseUrl
	// withCredentials: true,
})

export const post = (url, data) => {
	data = addCurrentUserParam(data)
	if (!(data instanceof FormData)) {
		data = qs.stringify(data)
	}
	return new Promise((resolve, reject) => {
		instance.post(url, data).then(response => {
			resolve(response)
		}).catch(error => {
			reject(error)
		})
	})
}

const addCurrentUserParam = (data = {}) => {
	const current = store.state.user.current
	if (current) {
			const { userid, token } = current
		
		if (userid && token) {
			if (data instanceof FormData) {
				data.append('userid', userid)
				data.append('token', token)
			} else {
				data.userid = userid
				data.token = token
			}
		}
	}
	return data
}