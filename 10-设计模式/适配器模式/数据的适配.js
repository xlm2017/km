/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-05-04 17:33:38
 * @LastEditTime: 2023-05-04 17:34:34
 * @LastEditors: xlm
 */



let data = [
  {
    "day": "周一",
    "uv": 6300
  },
  {
    "day": "周二",
    "uv": 7100
  },  {
    "day": "周三",
    "uv": 4300
  },  {
    "day": "周四",
    "uv": 3300
  },  {
    "day": "周五",
    "uv": 8300
  },  {
    "day": "周六",
    "uv": 9300
  }, {
    "day": "周日",
    "uv": 11300
  }
]


let x = ["周二", "周二", "周三"， "周四"， "周五"， "周六"， "周日"] //x轴的数据
 
let y = [6300, 7100, 4300, 3300, 8300, 9300, 11300] //坐标点的数据


//x轴适配器
function echartXAxisAdapter(res) {
  return res.map(item => item.day);
}
 
//坐标点适配器
function echartDataAdapter(res) {
  return res.map(item => item.uv);
}