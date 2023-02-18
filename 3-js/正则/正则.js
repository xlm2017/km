// 两位小数的金额
export function oninputMoney(num) {
    var str = num;
    console.log(num, typeof num)
    var len1 = str.substr(0, 1);
    var len2 = str.substr(1, 1);
    //如果第一位是0，第二位不是点，就用数字把点替换掉
    if (str.length > 1 && len1 == 0 && len2 != ".") {
        str = str.substr(1, 1);
    }
    //第一位不能是.
    if (len1 == ".") {
        str = "";
    }
    //限制只能输入一个小数点
    if (str.indexOf(".") != -1) {
        var str_ = str.substr(str.indexOf(".") + 1);
        if (str_.indexOf(".") != -1) {
            str = str.substr(0, str.indexOf(".") + str_.indexOf(".") + 1);
        }
    }
    //正则替换
    str = str.replace(/[^\d.]/g, "");
    str = str.replace("+", "");
    str = str.replace("-", "");
    str = str.replace("e", "");
    str = str.replace("E", "");
    console.log("替换后:", str)
    str = str.replace(/[^\d^\.]+/g, ""); // 保留数字和小数点
    // str = str.replace(/\.\d\d\d$/, ""); // 小数点后只能输两位
    str = str.match(/^\d*(\.?\d{0,2})/g)[0] || "";  // 小数点后只能输两位
    return str;
}