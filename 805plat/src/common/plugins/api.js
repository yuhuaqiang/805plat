//export const baseUrl = 'https://m-test.dev805.com'//内网测试
//export const baseUrl = 'https://m-test.805.com'//外网测试
//export const baseUrl = 'https://m.805.com'//正式
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
    receivecoup:baseUrl+"/gameshop/receivecoup",//优惠券领取
    cates:baseUrl+"/gameshop/cates",//获取商品分类
    list:baseUrl+"/gameshop/list",//获取商品列表
    goodsdetail:baseUrl+"/gameshop/detail",//获取商品详情
    convertgoods:baseUrl+"/gameshop/convertgoods",//商品兑换
    convertgoodsExchange:baseUrl+"/gameshop/convertgoods2",//商品兑换
    listhot:baseUrl+"/gameshop/listhot",//热门商品
    getwxconfig:baseUrl+"/weixin/share",//获取微信jssdk config
    createorder:baseUrl+"/gamepay/createorder",
    getpayconfig:baseUrl+"/gamepay/payup",
    getmycoupon:baseUrl+"/gameuser/mymchcoupons"
}

export default api