

// https://juejin.cn/post/6854573211594522631


class Storage {

  constructor(props = {}) { // 根据类型跟缓存时间，初始化缓存方法
    const { type = 'local', time = 5000, cacheSize = 2.5 } = props
    this.type = type
    this.time = time
    this.cacheSize = cacheSize * 1024 * 1024
    this.storageType = {
      local: 'localStorage',
      session: 'sessionStorage',
      cookie: 'cookie',
      indexDb: 'indexDb',
      normal: 'normal'
    }
  }

  baseSetItem (key, value) { // 接管原生新增方法
    return {
      local () { window[this.storageType[this.type]].setItem(key, value) },
      session () { window[this.storageType[this.type]].setItem(key, value) },
      cookie () { },
      indexDb () { },
      normal () {
        if (!window.baseStorage) {
          window.baseStorage = {}
        } else {
          window.baseStorage[key] = value
        }
      },
    }
  }

  baseRemoveItem (key) { // 接管原生删除方法
    return {
      local () { window[this.storageType[this.type]].removeItem(key) },
      session () { window[this.storageType[this.type]].removeItem(key) },
      cookie () { },
      indexDb () { },
      normal () {
        delete window.baseStorage[key]
      },
    }
  }

  setItem (key, value) { // 代理原生缓存方法，添加缓存时间
    this.baseSetItem(key, JSON.stringify({
      value,
      time: new Date().getTime()
    }))[this.type].apply(this)
  }

  getItem (key) { // 代理原生获取缓存方法，根据缓存时间，判断数据是否过期
    try {
      const { time, value } = JSON.parse(window[this.storageType[this.type]].getItem(key));
      const now = new Date().getTime()
      if (now > time + this.time) {
        this.baseRemoveItem(key, reValue)[this.type].apply(this)
        return null
      } else {
        return value
      }
    } catch (e) {
      return null
    }
  }
}

const local = new Storage({ type: 'local', time: 30000 }) // 初始化localStorage,添加5分钟缓存时效
const session = new Storage({ type: 'session', time: 30000 }) // 初始化sessionStorage,添加5分钟缓存时效
local.setItem(1, 2)
local.getItem(1)