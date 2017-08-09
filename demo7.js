function unique(arr){
    var newArr = [];
    for(var i = 0, len = arr.length; i < len; i++){
        for(var j = i + 1; j < len; j++){
            if(arr[i] === arr[j]){
                j = ++i;
            }
        }
        newArr.push(arr[i]);
    }
    return newArr;
};