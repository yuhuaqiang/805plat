//export const baseUrl = 'https://m-test.dev805.com'//内网测试
//export const baseUrl = 'https://m-test.805.com'//外网测试
// export const baseUrl = 'https://m.805.com'//正式
export const baseUrl=""
const api = {
    gettoken:baseUrl+"/gamelogin/wechat",
    getuserinfo:baseUrl+"/gameuser/userinfo",
    getuserbaseinfo:baseUrl+"/gameuser/userbaseinfo",//获取个人信息
    address:baseUrl+"/gameuser/address",//修改地址
    finishsend:baseUrl+"/gameuser/finishsend",//修改地址
    bindaccount:baseUrl+"/gameuser/bindaccount",//绑定手机
    couplist:baseUrl+"/gameshop/couplist",//获取领奖列表
    getbeanlist:baseUrl+"/gameuser/Ybwaterlist",//获取金豆记录
    getpointlist:baseUrl+"/gameuser/ticketRecord",//获取积分记录
    getpayitem:baseUrl+"/gamepay/payitem",//获取充值列表
}

export default api