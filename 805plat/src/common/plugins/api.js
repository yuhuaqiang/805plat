//export const baseUrl = 'https://m-test.dev805.com'//内网测试
//export const baseUrl = 'https://m-test.805.com'//外网测试
// export const baseUrl = 'https://m.805.com'//正式
export const baseUrl=""
const api = {
    gettoken:baseUrl+"/gamelogin/wechat",
    getuserinfo:baseUrl+"/gameuser/userinfo",
}

export default api