function unique(arr){
    var newArr = [];
    var item;
    for(var i = 0, len = arr.length; i < len; i++){
        item = arr[i];
        if(newArr.indexOf(item) === -1){
            newArr.push(item);
        }
    }
    return newArr;
};

var arr = [1,3,2,1,null,4,5,2,4,1,5,null];
console.log(unique(arr)); //[1,3,2,null,4,5]