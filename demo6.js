//排序后，比较相邻元素
function unique(arr){
    var newArr = [arr[0]];
    var item;
    arr.sort();
    for(var i = 1, len = arr.length; i < len; i++){
        item = arr[i];
        if(item !== arr[i - 1]){
            newArr.push(item);
        }
    }
    return newArr;
}