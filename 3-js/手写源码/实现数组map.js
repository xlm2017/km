Object.prototype.map = function (handleFn,thisValue) {
    const obj = this;
    let res = {};
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            res[prop] = handleFn.call(thisValue,obj[prop], prop,obj);
        }
    }
    return res;
};
// 测试用例
var obj = {
    name: 'sunny',
    sex: 'man'
};
var res = obj.map(function(val, prop,obj){
    console.log(this);
    console.log(val, prop,obj);
    return prop + '--' + val;
}, {name: 'thisthis'});
console.log('res:',res);


(() => {

    Object.prototype._map = function (fn, oThis = null) {
        if (typeof fn !== 'function') {
            throw new TypeError(`${fn} is not a function !`)
        }
        return JSON.parse(JSON.stringify(this, (key, val) => {
            if (key) {
                return fn.call(oThis, key, val, this)
            } else {
                return val
            }
        }))
    }
    // 用例
    let obj = {
        a: 2,
        b: 3,
        c: 4,
        d: 5
    };
    let _obj = obj._map((key, val, o) => {
        return ++val
    })
    console.log(_obj);
})();