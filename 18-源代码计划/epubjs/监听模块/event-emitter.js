rendition.on("selected", function(cfiRange, contents) {
  console.log("selected:", cfiRange, contents);
})


// 函数监听

import EventEmitter from "event-emitter";


class Rendition{
  constructor(){
    
  }
}


EventEmitter(Rendition.prototype);

export default Rendition;