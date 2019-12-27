import moment from 'moment'
export function fmoney(num) {
    num = num * 1;
    let numstr = num.toFixed(2);
    return numstr;
}
//设置cookie
export function setCookie(c_name, value, expire) {
    var date = new Date()
    date.setSeconds(date.getSeconds() + expire)
    document.cookie = c_name + "=" + escape(value) + "; expires=" + date.toGMTString()
};
//获取cookie
export function getCookie(c_name) {
    if (document.cookie.length > 0) {
        let c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1
            let c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return ""
};
/*删除cookie*/
export function delCookie(c_name) {
    setCookie(c_name, "", -1)
};

//数字加千分号
export function formatNumberRgx(num) {
    if (num) {
        var parts = num.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }
    else {
        return 0.00;
    }
}

//时间戳转日期
export function timestampToDate(timestamp) {
    timestamp = timestamp.toString();
    if (timestamp.length === 10) {
        timestamp += "000"
    }
    let dateobj = new Date(parseInt(timestamp));
    let datestr = timeFormat(dateobj, "YYYY-MM-DD");
    return datestr;
}

//时间格式转换
export function timeFormat(value, format, src = 'YYYY-MM-DD') {

    return moment(value, src).format(format)
}

//充值状态转换
export function formatstatus(status) {
    let statusenum={
        "1":"充值中",
        "2":"成功",
        "3":"失败",
        "4":"关闭"
    }
    return statusenum[status];
}