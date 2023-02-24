/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-02-23 15:10:05
 * @LastEditTime: 2023-02-23 15:16:45
 * @LastEditors: xlm
 */


function jsonToCss (json) {
  const selectors = Object.keys(json)

  return selectors.map((selector) => {
    const definition = json[selector]
    const rules = Object.keys(definition)
    const result = rules.map((rule) => {
      return `${rule}:${definition[rule]}`
    }).join(';')
    return `${selector}{${result}}`
  }).join('\n');
  
}


let json = {
  ".picturebt001": {"margin-top": "0 !important;"},
  "*": {"color": "red"}
}


console.log("str", jsonToCss(json), typeof jsonToCss(json));
