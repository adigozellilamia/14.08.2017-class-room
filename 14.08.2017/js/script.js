function returnNumb(arr,a) {
    var count=0;
    for (var i=0;i<arr.length; i++){
        if(arr[i]==a){
            count++;

        }
    }
    return count;
}
var arr=[17,15,14,17,21,14,17,14,17];
console.log(returnNumb(arr,17))