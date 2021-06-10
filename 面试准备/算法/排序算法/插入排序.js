/* 
插入排序
  插入排序核心--扑克牌思想： 
  就想着自己在打扑克牌，接起来一张，放哪里无所谓，
  再接起来一张，比第一张小，放左边，继续接，可能是中间数，就插在中间....依次，
  其实这样说大家可能还是不是很理解，
  简单来讲就是以第一个插入的数为基数，小的往左放大的往右放，
  然后不断循环基数如果第一个最小，那么就从第二个开始比较，依次循环。
*/

function insert(arr) {
  for(let i = 1; i < arr.length; i++) {  //外循环从1开始，默认arr[0]是有序段
      for(let j = i; j > 0; j--) {  //j = i,将arr[j]依次插入有序段中
          if(arr[j-1] > arr[j]) {
              [arr[j-1],arr[j]] = [arr[j],arr[j-1]];
          } else {
              break;
          }
      }
  }
  return arr;
}



// 指针的插入排序

function insertionSort(arr) {
  var len = arr.length;
  var preIndex, current;
  for (var i = 1; i < len; i++) {
      preIndex = i - 1;
      current = arr[i];
      while(preIndex >= 0 && arr[preIndex] > current) {
          arr[preIndex+1] = arr[preIndex];
          preIndex--;
      }
      arr[preIndex+1] = current;
  }
  return arr;
}