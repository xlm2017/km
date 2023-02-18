class RequestLimit {
  constructor(limit) {
    this.limit = Number(limit) || 2;
    this.blockQueue = []
    this.currentRequestNumber = 0
  }
  /**
   * 请求
   * @param {*} req
   */
  async request(req) {
    if(!req) {
      throw new Error('req is required.');
    }
    if(Object.prototype.toString.call(req) !== '[object Function]'){
      throw new Error('Req must be a function.')
    }
    if(this.currentRequestNumber >= this.limit){
      await new Promise(resolve => this.blockQueue.push(resolve))
    }
    return this._handlerReq(req)
  }
  /**
   * 内部方法处理请求
   * @param {*} req 
   */
  async _handlerReq(req) {
    this.currentRequestNumber++;
    try {
      return await req()
    } catch (err) {
      return Promise.reject(err)
    } finally {
      this.currentRequestNumber--;
      if(this.blockQueue.length) {
        this.blockQueue[0]()
        this.blockQueue.shift()
      }
    }  
  }
}