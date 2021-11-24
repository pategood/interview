// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

// s = 'abcabcbb'
// 输出: 3

function lengthOfLongestSubstring(s: string): number {
    if(s.length <= 1) return s.length;
    let max = 0;
    s.split('').reduce((total,value) => {
        let len = total.indexOf(value);
        if(len === -1){
            total += value;
            max = total.length > max ? total.length : max;
            return total;
        }else{
            total += value;
            return total.slice(len + 1);
        }
    },'');

    return max;
};

// 笔记:  需要明白reduce的第二个参数意义,初始值,给初始值正常,不给初始值将会少一次遍历 , 这里不给初始值的话,第一次if判断直接就走else了,结果返值为0
