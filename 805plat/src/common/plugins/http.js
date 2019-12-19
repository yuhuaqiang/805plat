import axios from 'axios'
import store from '@/common/store'
//import router, { loginUrl } from '@/common/router'
import qs from 'qs'


const instance = axios.create({
})

// instance.interceptors.response.use(response => {
//     if (response.status === 200) {
//         let { status, msg, data, code } = response.data;
//         if (status === 'true' || status === true) {
//             return data;
//         } else if (status === 'false' || status === false || status === 0) {
//             return Promise.reject(response.data);
//         }
//     } else {
//         alert(response.status);
//     }
// }, error => {
//     if (!error.response) {
//         alert('网络异常,请检查网络');
//     } else {
//         alert('请求失败');
//     }
//     return Promise.reject(error.response);
// })

export const post = (api, data) => {
	let token=store.state.user.token;
	if(token){
		instance.defaults.headers.common['token'] = token;
	}
    return new Promise((resolve, reject) => {
        instance.post(api, data).then(response => {
            resolve(response)
        }).catch(error => {
            reject(error)
        })
    })
}

export const get = (api, data) => {
	data = addCurrentUserParam(data);
    return new Promise((resolve, reject) => {
        instance.get(api, data).then(response => {
            resolve(response)
        }).catch(error => {
            reject(error)
        })
    })
}

const addCurrentUserParam = (data = {}) => {
	const token = store.state.user.token;
    if (token) {
        if (data instanceof FormData) {
            data.append('token', token)
        } else {
            data.token = token
        }
	}
	
	return data
}