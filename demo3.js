function unique(arr){
    var newArr = [];
    arr.forEach(function(item){
        if(newArr.indexOf(item) === -1){
            newArr.push(item);
        }
    });
    return newArr;
}