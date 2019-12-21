//export const baseUrl = 'https://m-test.dev805.com'//内网测试
//export const baseUrl = 'https://m-test.805.com'//外网测试
// export const baseUrl = 'https://m.805.com'//正式
export const baseUrl=""
const api = {
    gettoken:baseUrl+"/gamelogin/wechat",
    getuserinfo:baseUrl+"/gameuser/userinfo",
    getuserbaseinfo:baseUrl+"/gameuser/userbaseinfo",//获取个人信息
    address:baseUrl+"/gameuser/address",//修改地址
}

export default api