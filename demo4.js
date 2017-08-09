// 不能识别NaN
function unique(arr){
    return arr.reduce(function(prev, next){
        if(prev.indexOf(next) === -1){
            prev.push(next);
        }
        return prev;
    }, []);
}

var arr = [4, 2, 1, 3, 2, 3, NaN, NaN];
console.log(unique(arr)); //[4,2,1,3,NaN,NaN]