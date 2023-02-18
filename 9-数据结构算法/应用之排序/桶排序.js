function bucketSort(array) {
  let min = Math.min(...array);
  let max = Math.max(...array);
  //初始化桶个数
  let buketNum = Math.floor((max - min) / array.length) + 1;
  let buckets = new Array(buketNum);
  //设置桶中的每个元素为数组
  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }
  console.log('new buckets', buckets);
  //将元素分到不同的桶中，元素在哪个桶中 =  （目标元素-最小值）/ 原数组长度
  for (let j = 0; j < array.length; j++) {
    buckets[Math.floor((array[j] - min) / buketNum)].push(array[j]);
  }
  console.log('buckets info', buckets);
  //对每个桶中的数据进行排序
  for (let k = 0; k < buckets.length; k++) {
    //array.sort()排序不会有人忘记了吧
    buckets[k].sort((a, b) => {
      return a - b;
    });
  }
  console.log('buckets sort', buckets);
  //聚合桶，flat()方法不会有人不知道吧
  let result = buckets.flat();
  console.log('bucketSort result:', result);
}

bucketSort([10, 9, 100, 20, 5, 1, 4, 100]);


// https://blog.csdn.net/long861774/article/details/126436719


// 经典的排序算法，很多人都听过，很多人也许用过，但是也有很多人，听过没见过。为什么呢？现在我们有了越来越多的框架、依赖包，我们将能用到排序的实际场景，作为业务将其封装成了函数，所以，一些人只知函数而不知其运行逻辑。

// 基于以上，为了让自己更好的理解函数运行逻辑，整理了一些基本排序的方法的运行规则，以及部分个人理解，希望能给大家一些帮助。

// 本文将讲述桶排序。桶排序其实就是把数据按照规则放到不同的集合中，然后在各个集合中，对元素进行排序，最终再将所有数组合并为一个；

// 桶排序
// 桶排序是计数排序的升级版。它利用了函数的映射关系，高效与否的关键就在于这个映射函数的确定；

// 桶排序实现原理
// 设置一个定值正整数作为桶的数量，我们需要把数据分别放到这些桶中，一般默认桶数量为，向下取整((最大值-最小值)/数组长度) +1；
// 遍历数组，根据某种算法，将元素放到对应的桶中，算法一般为，桶位置 = 向下取整（（元素值-最小值）/ 原数组长度；
// 对各个桶中的元素进行排序，此时可以借用任意你喜欢的排序方法，原生、选择排序、计数排序等等；
// 在数组中排除空桶；
// 将所用带有数据的桶进行合并；
// ————————————————
// 版权声明：本文为CSDN博主「乾复道」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/long861774/article/details/126436719


// 复杂度
// 时间复杂度：主要与各个桶的数据排序的时间复杂度相关，因为其它部分的时间复杂度都为O(n)。所以，桶划分的越多，各个桶中的数据越少，排序所用的时间也会越少。但相应的空间消耗就会增大；
// 空间复杂度：O(n)

// 寄语
// 由于桶排序的时间复杂度和空间复杂度是线性的，所以桶排序的效率较为稳定；
// 桶排序可以说是一个标准的以空间换时间的排序方法，为了不占用更多的内存或者不占用太多的时间，我们一般采用平均值桶个数来进行操作，而不是通过极端情况来进行。
// ————————————————
// 版权声明：本文为CSDN博主「乾复道」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/long861774/article/details/126436719