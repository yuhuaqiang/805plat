import { get,post} from './http'
import api from './api'
export default (vue) => {
	vue.prototype.$post = post
	vue.prototype.$get = get
	vue.prototype.$api = api
}
