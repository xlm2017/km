/**
 * 删除指定目录下所有文件和目录
 * @param dir 指定目录
 */
function delDirectory (dir) {
  let files = [];
  if (fs.existsSync(dir)) {
    files = fs.readdirSync(dir);
    files.forEach((file, index) => {
      let curPath = path.join(dir, file);
      var stat = fs.statSync(curPath);
      if (stat.isDirectory()) {
        delDirectory(curPath); //递归删除文件夹
      } else if (stat.isFile()) {
        fs.unlinkSync(curPath); //删除文件
      }
    });
    fs.rmdirSync(dir);
  }
}
