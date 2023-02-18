// observer 观察者

// subject 目标

// 面向对象编程  // 属性和方法

var subject = {
    // 每个目标都有观察对象
    observers: [],
    // 添加观察者
    add(observer) {
        this.observers.push(observer)
    },
    // 通知观察者
    notify() {
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            element.update()
        }
    }

}
var observer = {
    update() {
        alert('updated')
    }
}
subject.add(observer)
subject.notify()



{

    //观察者模式
    function ObserverList() {
        this.observerList = [];
    }
    ObserverList.prototype.add = function (obj) {
        return this.observerList.push(obj)
    };
    ObserverList.prototype.count = function () {
        return this.observerList.length;
    };
    ObserverList.prototype.get = function (index) {
        if (index > -1 && index < this.observerList.length) {
            return this.observerList[index];
        }
    };
    ObserverList.prototype.indexOf = function (obj, startIndex) {
        let i = startIndex;
        while (i < this.observerList.length) {
            if (this.observerList[i] == obj) {
                return i;
            }
            i++;
        }
        return -1
    };
    ObserverList.prototype.removeAt = function (index) {
        this.observerList.splice(index, i);
    };

    function Subject() {
        this.observers = new ObserverList();
    }
    Subject.prototype.addObserver = function (observer) {
        this.observers.add(observer)
    };
    Subject.prototype.removeObserver = function (observer) {
        this.observer.removeAt(this.observers.indexOf(observer, 0));
    }
    Subject.prototype.notify = function (context) {
        let observerCount = this.observers.count();
        for (let index = 0; index < observerCount; index++) {
            this.observers.get(index).update(context)

        }
    }

    function Observer() {
        this.update = (context) => {
            console.log(context)
        }
    }
    let o = new Observer();
    let subject = new Subject();
    subject.addObserver(o)
    subject.notify(55);

}


// 观察者模式（Observer Pattern）
// 当对象存在一对多的关系时，则使用观察者模式（Observer Pattern）,例如当一个对象被修改时候，则会自动通知它的依赖对象。
// 观察者模式属于行为型模式。 与发布/订阅模式不同的是，观察模式没有调度中心，由目标直接调度观察者，观察者模式的观察者跟目标之间是存在依赖的，

// 介绍
// 意图：定义对象的一种一对多的依赖关系，当一个对象的状态发生改变时候，所有依赖它的对象都被通知并且更新状态。
// 主要解决：一个对象状态改变给其他对象通知的问题，而且要考虑到易用和低耦合，保证高度的协作。
// 何时使用：一个对象（目标对象）的状态发生改变，所有的依赖对象（观察者对象）都将得到通知，进行广播通知。
// 如何解决：使用面向对象技术，可以将依赖关系弱化。
// 关键代码：在抽象类里有一个ArrayList存在观察者们
// 应用实例：拍卖时候，拍卖师观察最高价，通知其他竞价者竞价。
// 优缺点
// 优点：

// 观察者和被观察者是抽象耦合的
// 建立一套触发机制 缺点：
// 一个被观察者对象如果有太多间接或者直接的观察者，将花费时间通知观察者
// 如果存在循环依赖，可能导致系统崩溃
// 观察者仅仅知道别观察者发生了变化，而不知道如何发生了变化