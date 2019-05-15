// 1. 跟phone number一样解
//   字符串模式遍历
// 2. 多种模式解法 
// [下标]
// nums.length
function likes(names){
    // 规则模版数组
    var templates = [
        'no one like this',
        '{name} like this',
        '{name} and {name} like this',
        '{name} ,{name} and {name} like this',
        '{name} ,{name} and {n} others like this',        
    ];
    var idx = Math.min(names.length,4);
    return templates[idx].replace(/{name}|{n}/g,function(val){
        return val === '{name}'? names.shift():names.length
    });
}
console.log(likes([]));
console.log(likes(['AJ']));
console.log(likes(['A','B']));
console.log(likes(['A','B','C']));
console.log(likes(['A','B','C']));
console.log(likes(['A','B','C','D']));
console.log(likes(['A','B','C','D','E']));