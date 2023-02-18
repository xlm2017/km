function countingSort(arr){
  var len = arr.length,
      Result = [],
      Count = [],
      min = max = arr[0];
  console.time('countingSort waste time:');
  /*查找最大最小值,并将arr数置入Count数组中,统计出现次数*/
  for(var i = 0;i<len;i++){
    Count[arr[i]] = Count[arr[i]] ? Count[arr[i]] + 1 : 1;
    min = min <= arr[i] ? min : arr[i];
    max = max >= arr[i] ? max : arr[i];
  }
  /*从最小值->最大值,将计数逐项相加*/
  for(var j = min;j<max;j++){
    Count[j+1] = (Count[j+1]||0)+(Count[j]||0);
  }
  /*Count中,下标为arr数值,数据为arr数值出现次数;反向填充数据进入Result数据*/
  for(var k = len - 1;k>=0;k--){
    /*Result[位置] = arr数据*/
    Result[Count[arr[k]] - 1] = arr[k];
    /*减少Count数组中保存的计数*/
    Count[arr[k]]--;
    /*显示Result数组每一步详情*/
    console.log(Result);
  }
  console.timeEnd("countingSort waste time:");
  return Result;
}
var arr = [1, 3, 5, 2, 1, 4];
console.log(countingSort(arr));


// js计数排序
// 计数排序不是基于比较的排序算法，其核心在于将输入的数据值转化为键存储在额外开辟的数组空间中。 作为一种线性时间复杂度的排序，计数排序要求输入的数据必须是有确定范围的整数。

// 算法描述
// 找出待排序的数组中最大和最小的元素；
// 统计数组中每个值为i的元素出现的次数，存入数组C的第i项；
// 对所有的计数累加（从C中的第一个元素开始，每一项和前一项相加）；
// 反向填充目标数组：将每个元素i放在新数组的第C(i)项，每放一个元素就将C(i)减去1。