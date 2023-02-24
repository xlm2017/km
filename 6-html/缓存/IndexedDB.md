<!--
 * @Description: 
 * @Author: xlm
 * @Date: 2023-02-24 09:53:49
 * @LastEditTime: 2023-02-24 10:23:25
 * @LastEditors: xlm
-->

# quota 定额管理器

## 存储限制


### 全局限制
浏览器的最大存储空间是动态的——它取决于您的硬盘大小。 
全局限制为可用磁盘空间的 50％。在 Firefox 中，一个名为 Quota Manager 的内部浏览器工具会跟踪每个源用尽的磁盘空间，并在必要时删除数据。


Chrome 允许浏览器使用多达 80% 的总磁盘空间。一个来源最多可以使用总磁盘空间的 60%。您可以使用 StorageManager API 来确定可用的最大配额。其他基于 Chromium 的浏览器可能允许浏览器使用更多的存储空间。

### 组限制
这被定义为全局限制的 20％，但它至少有 10 MB，最大为 2GB。每个源都是一组（源组）的一部分。每个 eTLD+1 域都有一个组。


### LRU 策略
当可用磁盘空间已满时，配额管理器将根据 LRU 策略开始清除数据——最近最少使用的源将首先被删除，然后是下一个，直到浏览器不再超过限制。


### 对比
LocalStorage 是同步的，会阻塞主线程，因此应避免使用。其大小限制约为 5MB，并且只能包含字符串。
无法从 web worker 或 service worker 访问 LocalStorage。


### 参考
Web 存储 https://web.dev/storage-for-the-web/