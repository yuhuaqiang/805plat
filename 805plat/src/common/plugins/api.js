//export const baseUrl = 'https://m-test.dev805.com'//内网测试
//export const baseUrl = 'https://m-test.805.com'//外网测试
export const baseUrl = 'https://m.805.com'//正式
const api = {
    gettoken:{
        url:baseUrl+"/gamelogin/wechat",
    },
    getuserinfo:{
        url:baseUrl+"/gameuser/userinfo",
        auth:true
    }
    
}

export default api