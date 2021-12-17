// 给定三个字符串 s1、s2、s3，请你帮忙验证 s3 是否是由 s1 和 s2 交错 组成的。

// 两个字符串 s 和 t 交错 的定义与过程如下，其中每个字符串都会被分割成若干 非空 子字符串：

// s = s1 + s2 + ... + sn
// t = t1 + t2 + ... + tm
// |n - m| <= 1
// 交错 是 s1 + t1 + s2 + t2 + s3 + t3 + ... 或者 t1 + s1 + t2 + s2 + t3 + s3 + ...
// 提示：a + b 意味着字符串 a 和 b 连接。


/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
  const isInterleave = (s1, s2, s3) => {
    if (s1.length + s2.length != s3.length) return false

    const check = (i, j, k) => {
      if (k == s3.length) return true

      let isValid = false
      if (i < s1.length && s1[i] == s3[k]) {
        isValid = check(i + 1, j, k + 1) // i、k右移一位，递归考察
      }
      if (j < s2.length && s2[j] == s3[k]) {
        isValid = isValid || check(i, j + 1, k + 1)
      }
      return isValid
    }

    return check(0, 0, 0)
  }




  // 记忆化递归


const isInterleave = (s1, s2, s3) => {
  if (s1.length + s2.length != s3.length) return false;

  const memo = new Array(s1.length + 1);
  for (let i = 0; i < memo.length; i++) {
    memo[i] = new Array(s2.length + 1);
  }

  const check = (i, j, k) => {
    if (memo[i][j] != null) return memo[i][j];

    if (k == s3.length) return memo[i][j] = true;

    let isValid = false;

    if (i < s1.length && s1[i] == s3[k]) {
      isValid = check(i + 1, j, k + 1);
    }
    if (j < s2.length && s2[j] == s3[k]) {
      isValid = isValid || check(i, j + 1, k + 1);
    }
    return memo[i][j] = isValid;
  };

  return check(0, 0, 0);
};
