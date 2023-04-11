function outer(num){
    return function inner(){
        return num+5;
    }
}
var func = outer(5);
console.log(func()); // outputs 10
