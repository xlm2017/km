function deepCopy(obj) {
    if (typeof obj === 'object') {
        var result = obj.constructor === Array ? [] : {};

        for (var i in obj) {
            result[i] = typeof obj[i] === 'object' ? deepCopy(obj[i]) : obj[i];
        }
    } else {
        var result = obj;
    }

    return result;
}