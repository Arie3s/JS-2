function find(key,arr){
    var arr2=arr.slice(1);
    if(arr[0]===key && arr.length != 0){
        return true;
    }else if(arr.length===0){return false;}
    return find(key,arr2);
}



var arr = [1,6,3,5,8,2,0];
console.log(find(23,arr));