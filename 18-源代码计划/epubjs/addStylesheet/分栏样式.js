/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-02-22 20:04:02
 * @LastEditTime: 2023-02-22 20:14:53
 * @LastEditors: xlm
 */


// 搜索
// -width  ==>  n-width  => 


let COLUMN_WIDTH = prefixed("column-width");

function column(){
  this.css(COLUMN_WIDTH, columnWidth+"px");
}

// .columns

 if (this._flow === "paginated") {
  formating = contents.columns(this.width, this.height, this.columnWidth, this.gap, this.settings.direction);
} 

function css(property, value, priority) {
  var content = this.content || this.document.body;

  if (value) {
    content.style.setProperty(property, value, priority ? "important" : "");
  } else {
    content.style.removeProperty(property);
  }

  return this.window.getComputedStyle(content)[property];
}