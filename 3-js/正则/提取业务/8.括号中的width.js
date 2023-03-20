

let str = `<video style="width:80%;text-align:center;" 
src="https://static.zgepub.cn/shanghairenminchubanshe/huozhong/video/caifang.mp4" 
placeholder="blob:http://localhost:5174/fe8b3f81-9964-4c7a-addf-575d93133a03" 
poster="blob:http://localhost:5174/fe8b3f81-9964-4c7a-addf-575d93133a03" 
controls="controls"></video>



`;

let content = str;

const reg = /([;|"| ]+width:)([0-9]+.?[0-9]*)%/g
while (reg.exec(content) != null) {
  const before = RegExp.$1;
  const num = RegExp.$2;
  const nReg = new RegExp(`${before}${num}%`, "g");
  
  content = content.replace(nReg, `${before}${num}vw`);
}

console.log(content);