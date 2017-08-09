// null 不可以被识别,null导致跳出循环
function unique(arr){
    var newArr = [];
    for(var i = 0, item; item = arr[i++];){
        if(newArr.indexOf(item) === -1){
            newArr.push(item);
        }
    }
    return newArr;
};

var arr = [1,3,2,1,null,4,5,2,4,1,5,null];
console.log(unique(arr)); //[1,3,2]