function find(key,arr,i=0){
    var j=i++;
    var arr2=arr.slice(i);
    if(arr[0]===key && arr.length != 0){
        return true;
    }else if(arr.length===0){return false;}
    return find(key,arr2,j++);
}



var arr = [1,6,3,5,8,2,0];
console.log(find(9,arr));