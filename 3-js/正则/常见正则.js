'10000000000'.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
// "10.000.000.000"

// \B  正则 单词边界