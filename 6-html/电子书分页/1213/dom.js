

// 获取div到窗口x轴距离
function getMonitorWallLeft (ele) {
  // let ele = document.getElementById('monitor-mdp')
  let L = ele.offsetLeft
  while (ele.offsetParent !== null) {
    ele = ele.offsetParent
    L += ele.offsetLeft
    return L
  }
}
// 获取div到窗口y轴距离
function getMonitorWallTop (ele) {
  // let ele = document.getElementById('monitor-mdp')
  let T = ele.offsetTop
  while (ele.offsetParent !== null) {
    ele = ele.offsetParent
    T += ele.offsetTop
    return T
  }
}

// 返回页面高度
function getPageViewHeight () {
  var d = document,
    a = d.compatMode == "BackCompat" ? d.body : d.documentElement;
  return a.clientHeight;
}

// 获得当前元素所在的页码
function getPageIndexByDom (dom) {
  function getPageViewHeight () {
    var d = document,
      a = d.compatMode == "BackCompat" ? d.body : d.documentElement;
    return a.clientHeight;
  }
  let elementHeight = dom.getBoundingClientRect().height;
  let top = dom.getBoundingClientRect().top;
  let index = Math.floor((top + elementHeight) / getPageViewHeight());
  return index;
}

// 通过传入的dom和页面高度, 返回当前dom所在页码
function getPageIndexByDomAndPage (dom, pageHeight) {
  
  // 自身高度
  let elementHeight = dom.getBoundingClientRect().height;
  // console.log('高度:', dom, elementHeight);
  let top = dom.getBoundingClientRect().top;
  // 开始页
  let index1 = Math.floor((top) / pageHeight);
  // 尾页
  let index2 = Math.floor((top + elementHeight) / pageHeight);
  if (index1 === index2) {
    return [index1];
  } else {
    let arr = [];
    for (let i = index1; i <= index2; i++) {
      arr.push(i);
    }
    return arr;
  }
}

// 获得当前元素是否只存在于一个页面中
function isOnePageElement (dom) {
  function getPageViewHeight () {
    var d = document,
      a = d.compatMode == "BackCompat" ? d.body : d.documentElement;
    return a.clientHeight;
  }
  let elementHeight = dom.getBoundingClientRect().height;
  let top = dom.getBoundingClientRect().top;
  let index = Math.floor((top + elementHeight) / getPageViewHeight());
  let index2 = Math.floor((top) / getPageViewHeight());
  return index === index2;
}

// dom距离顶部的高度
// getBoundingClientRect().top


// dom自身的高度
// getBoundingClientRect().height

// offsetHeight  // 元素总高度

// dom.outerText  // div中的文字内容  // textContent

// .firstElementChild  // 第一个子元素

// .lastElementChild  // 最后一个子元素


// .parentElement  // 该元素的父元素

// nextElementSibling  // 元素向后相邻的元素 

// previousElementSibling  // 元素向前相邻的元素 

// let fonts = document.getElementsByTagName("font");  //标签集合

// tagName // 元素标签名称
