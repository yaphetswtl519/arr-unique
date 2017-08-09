function unique(arr){
    var newArr = [];
    var temp = {};
    var item;
    var type;
    for(var i = 0, len = arr.length; i < len; i++){
        item = arr[i];
        type = typeof item;
        if(!temp[item]){
            temp[item] = [type];
            newArr.push(item);
        }else if(temp[item].indexOf(type) === -1){
            temp[item].push(type);
            newArr.push(item);
        }
    }
    return newArr;
}