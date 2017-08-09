//利用判断索引的方式，比较该值第一个元素的索引是否等于自身，从第二个值开始
function unique(arr){
    var newArr = [arr[0]];
    var item;
    for(var i = 1, len = arr.length; i < len; i++){
        item = arr[i];
        if(arr.indexOf(item) === i){
            newArr.push(item);
        }
    }
    return newArr;
}