// 给你一个整数数组 nums 和两个整数 indexDiff 和 valueDiff 。

// 找出满足下述条件的下标对 (i, j)：

// i != j,
// abs(i - j) <= indexDiff
// abs(nums[i] - nums[j]) <= valueDiff
// 如果存在，返回 true ；否则，返回 false 。



// 示例 1：

// 输入：nums = [1,2,3,1], indexDiff = 3, valueDiff = 0
// 输出：true
// 解释：可以找出 (i, j) = (0, 3) 。
// 满足下述 3 个条件：
// i != j --> 0 != 3
// abs(i - j) <= indexDiff --> abs(0 - 3) <= 3
// abs(nums[i] - nums[j]) <= valueDiff --> abs(1 - 1) <= 0
// 示例 2：

// 输入：nums = [1,5,9,1,5,9], indexDiff = 2, valueDiff = 3
// 输出：false
// 解释：尝试所有可能的下标对 (i, j) ，均无法满足这 3 个条件，因此返回 false 。


// 提示：

// 2 <= nums.length <= 105
// -109 <= nums[i] <= 109
// 1 <= indexDiff <= nums.length
// 0 <= valueDiff <= 109


// 我们按照元素的大小进行分桶，维护一个滑动窗口内的元素对应的元素
// 对于元素 x，其影响的区间为 [x - t, x + t]。
// 于是我们可以设定桶的大小为 t + 1。
// 如果两个元素同属一个桶，那么这两个元素必然符合条件。
// 如果两个元素属于相邻桶， 那么我们需要校验这两个元素是否差值不超过 t。
// 如果两个元素既不属于同一个桶，也不属于相邻桶，那么这两个元素必然不符合条件。

// 具体地，我们遍历该序列，假设当前遍历到元素 xxx，那么我们首先检查 xxx 所属于的桶是否已经存在元素，
// 如果存在，那么我们就找到了一对符合条件的元素，否则我们继续检查两个相邻的桶内是否存在符合条件的元素。

// 实现方面，我们将 int范围内的每一个整数 x 表示为 x = (t + 1) * a + b (0≤b≤t) 的形式，
// 这样 x 即归属于编号为 a 的桶。因为一个桶内至多只会有一个元素，所以我们使用哈希表实现即可。

var containsNearbyAlmostDuplicate = function (nums, k, t) {
  const n = nums.length;
  const mp = new Map();
  for (let i = 0; i < n; ++i) {
    const x = nums[i];
    const id = getID(x, t + 1);
    console.log("id:", id);
    if (mp.has(id)) {
      return true;
    }
    if (mp.has(id - 1) && Math.abs(x - mp.get(id - 1)) <= t) {
      return true;
    }
    if (mp.has(id + 1) && Math.abs(x - mp.get(id + 1)) <= t) {
      return true;
    }
    mp.set(id, x);
    if (i >= k) {
      mp.delete(getID(nums[i - k], t + 1));
    }
  }
  return false;
};

// 获得桶的编号
const getID = (x, w) => {
 
  // width 桶的宽度
  // 这里假设题目中的w等于10，则根据我们的求解思路，必须要使每个桶的容纳范围为11，即桶的容量要设置为11。

  // 对于>=0的数，显然用该数除以11即可得到这个数字正确的桶编号，由于C++中正小数负小数转为int时，都是向0取整的，
  // 所以对于负数，应当设计出不同于正数的编号方法，研究得到如下编号方法：
  // return x < 0 ? Math.floor((x + 1) / w) - 1 : Math.floor(x / w);

  // js可直接使用符号桶
  return Math.floor(x / w);

  // Math.floor(-0.3) -1

  Math.floor(nums[i] / size)

// 如何理解负数部分的逻辑？

// 由于我们处理正数的时候，处理了数值 0，因此我们负数部分是从 -1 开始的。

// 还是我们上述 🌰，此时我们有 t = 3 和 size = t + 1 = 4。

// 考虑 [-4,-3,-2,-1] 的情况，它们应该落在一个桶中。

// 如果直接复用 idx = nums[i] / size 的话，[-4] 和 [-3,-2,-1] 会被分到不同的桶中。

// 根本原因是我们处理整数的时候，已经分掉了数值 0。

// 这时候我们需要先对 nums[i] 进行 +1 操作（即将负数部分在数轴上进行整体右移），即得到 (nums[i] + 1) / size。

// 这样一来负数部分与正数部分一样，可以被正常分割了。

// 但由于 0 号桶已经被使用了，我们还需要在此基础上进行 -1，相当于将负数部分的桶下标（idx）往左移，即得到 ((nums[i] + 1) / size) - 1。
}

let nums = [1, 5, 9, 1, 5, 9], indexDiff = 2, valueDiff = 3;
// false

// let nums = [1,2,3,1], indexDiff = 3, valueDiff = 0;
// true


console.log(containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff));