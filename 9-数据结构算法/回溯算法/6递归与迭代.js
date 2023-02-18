
// 迭代
function traversal(int[] nums) {
  for (int i = 0; i < nums.length; i++) {
      System.out.println(nums[i]);
  }
}

// 递归
function traversal(int[] nums, int index) {
  if (index == nums.length) return ;
  // 处理当前元素
  System.out.println(nums[i]);
  // 递归处理 index + 1 后的元素
  traversal(nums, index + 1);
}

traversal(nums, 0);