// 联系
// 发布-订阅模式是观察者模式的一种变体。发布-订阅只是把一部分功能抽象成一个独立的ChangeManager。

// 意图
// 都是某个对象(subject, publisher)改变，使依赖于它的多个对象(observers, subscribers)得到通知。

// 区别与适用场景
// 总的来说，发布-订阅模式适合更复杂的场景。

// 在「一对多」的场景下，发布者的某次更新只想通知它的部分订阅者？

// 在「多对一」或者「多对多」场景下。一个订阅者依赖于多个发布者，某个发布者更新后是否需要通知订阅者？还是等所有发布者都更新完毕再通知订阅者？

// 这些逻辑都可以放到ChangeManager里。

// 观察者模式没中间商赚差价
// 发布订阅模式 有中间商赚差价

var publisher = {
    publish(pubsub) {
        pubsub.publish()
    }
}
var pubsub = {
    subscribes: [],
    publish() {
        this.subscribes.forEach(subscribe => {
            subscribe.update();
        })
    },
    subscribe(sub) {
        this.subscribes.push(sub)
    }
}
var subscribe = {
    update() {
        console.log('update')
    },
    subscribe(pubsub) {
        pubsub.subscribe(this);
    }
}
subscribe.subscribe(pubsub)
publisher.publish(pubsub)

{
    // 发布 / 订阅模式
    // 发布订阅模式，它定义了一种一对多的关系，可以使多个观察者对象对一个主题对象进行监听，当这个主题对象发生改变时，依赖的所有对象都会被通知到。
    //  发布订阅模式跟观察者模式的区别在于，订阅发布模式，有统一调度中心。

    // PubSub 模式，是 Publish / Subscribe 的缩写，意为“发布 / 订阅”模式。

    // 在实际使用中，我们应该也会接触到 PubSub 模式，例如 Nodejs 中的 EventEmitter、Backbone 中的事件模型、以及 jQuery 中的事件。 
    // 以 EventEmitter 为栗子，它提供了 addListener(event, listener) ，removeListener(event, listener) ，emit(event, [arg1], [arg2], [...]) 方法。

    var pubsub = {};
    (function (myObject) {
        // Storage for topics that can be broadcast
        // or listened to
        var topics = {};
        // An topic identifier
        var subUid = -1;
        // Publish or broadcast events of interest
        // with a specific topic name and arguments
        // such as the data to pass along
        myObject.publish = function (topic, args) {
            if (!topics[topic]) {
                return false;
            }
            var subscribers = topics[topic],
                len = subscribers ? subscribers.length : 0;
            while (len--) {
                subscribers[len].func(topic, args);
            }
            return this;
        };
        // Subscribe to events of interest
        // with a specific topic name and a
        // callback function, to be executed
        // when the topic/event is observed
        myObject.subscribe = function (topic, func) {
            if (!topics[topic]) {
                topics[topic] = [];
            }
            var token = (++subUid).toString();
            topics[topic].push({
                token: token,
                func: func
            });
            return token;
        };
        // Unsubscribe from a specific
        // topic, based on a tokenized reference
        // to the subscription
        myObject.unsubscribe = function (token) {
            for (var m in topics) {
                if (topics[m]) {
                    for (var i = 0, j = topics[m].length; i < j; i++) {
                        if (topics[m][i].token === token) {
                            topics[m].splice(i, 1);
                            return token;
                        }
                    }
                }
            }
            return this;
        };
    }(pubsub));

    //订阅者1订阅了test
    pubsub.subscribe('test', function () {
        console.log(arguments, 1)
    });
    //订阅者2订阅了test
    pubsub.subscribe('test', function () {
        console.log(arguments, 2)
    });
    //订阅者3订阅了test
    pubsub.subscribe('test', function () {
        console.log(arguments, 2)
    });

    //发布者发布事件
    pubsub.publish('test', 666)
}