# html中的文件对象

## filereader

### FileReader 对象允许Web应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，使用 File 或 Blob 对象指定要读取的文件或数据。

### FileReader.readAsDataURL()
开始读取指定的Blob中的内容。一旦完成，result属性中将包含一个data: URL格式的Base64字符串以表示所读取文件的内容。

- readAsDataURL（）这个方法其实就是把这个文件转换成为了base64的格式，如果是中图片的话，那就是图片的base64格式。
readAsText（）这个方法就是读取成为文本，如果你上传的是一个txt的文件，那么是直接可以读出来你们的文本信息的，但是doc文档格式是不可以的。

### FileReader.readAsArrayBuffer()
开始读取指定的 Blob中的内容, 一旦完成, result 属性中保存的将是被读取文件的 ArrayBuffer 数据对象.

## 文件下载

### 同源单文件

- a

### 非同源 cors

- function downloadWithBlob(url) {
 fetch(url).then(res => res.blob().then(blob => {
  var a = document.createElement('a');
  var url = window.URL.createObjectURL(blob);
  var filename = 'file.png';
  a.href = url;
  a.download = filename;
  a.click();
  window.URL.revokeObjectURL(url);
 }));
}

### 存在CORS问题

- 使用 canvas 将图片转换成 base64 编码之后再通过 标签的 download 属性下载

### https://blog.csdn.net/candy_yl/article/details/88796327

## 分支主题 3

## 分支主题 4

*XMind - Trial Version*