


```js

class Book {
  constructor(url, options) {
    // Allow passing just options to the Book
    if (typeof (options) === "undefined" &&
      typeof (url) !== "string" &&
      url instanceof Blob === false &&
      url instanceof ArrayBuffer === false) {
      options = url;
      url = undefined;
    }

    this.settings = extend(this.settings || {}, {
      requestMethod: undefined,
      requestCredentials: undefined,
      requestHeaders: undefined,
      encoding: undefined,
      replacements: undefined,
      canonical: undefined,
      openAs: undefined,
      store: undefined,
      // 配置设备参数
      osParams: undefined,
      // 开发epub 前触发 ，需要返回Promise
      openBefore: undefined,
      // 这边会在xml、css时触发
      contentBefore: undefined
    });

    extend(this.settings, options);

    window.bookSettings = this.settings;

    // Promises
    this.opening = new defer();
    /**
     * @member {promise} opened returns after the book is loaded
     * @memberof Book
     */
    this.opened = this.opening.promise;
    this.isOpen = false;

    this.loading = {
      manifest: new defer(),
      spine: new defer(),
      metadata: new defer(),
      cover: new defer(),
      navigation: new defer(),
      pageList: new defer(),
      resources: new defer(),
      displayOptions: new defer()
    };

    this.loaded = {
      manifest: this.loading.manifest.promise,
      spine: this.loading.spine.promise,
      metadata: this.loading.metadata.promise,
      cover: this.loading.cover.promise,
      navigation: this.loading.navigation.promise,
      pageList: this.loading.pageList.promise,
      resources: this.loading.resources.promise,
      displayOptions: this.loading.displayOptions.promise
    };

    /**
     * @member {promise} ready returns after the book is loaded and parsed
     * @memberof Book
     * @private
     */
    this.ready = Promise.all([
      this.loaded.manifest,
      this.loaded.spine,
      this.loaded.metadata,
      this.loaded.cover,
      this.loaded.navigation,
      this.loaded.resources,
      this.loaded.displayOptions
    ]);
  }
}

  // ready事件需要等上面的事情全部干完才回调

```