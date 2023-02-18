https://vimsky.com/examples/usage/node-js-filehandle-read-method.html

filehandle.read(buffer, offset, length, position);
参数：该函数接受上述和以下所述的四个参数：

buffer: 存储从文件中获取的数据。它是将在其中写入数据的缓冲区。
offset: 缓冲区中的偏移量，指示从何处开始写入。
length: 一个整数，指定要读取的字节数。
position: 一个整数，指定从文件中开始读取的位置。 Position是一个参数，用于指定从文件中开始读取的位置。如果position为null，则从当前文件位置读取数据。
返回值：它返回Promise。