var number=require("readline-sync");
var n=number.questionInt("enter the number:--");
var prime=true;
if (n===1){
    console.log("1 is neither prime nor composite")
}
else if (n>1){
    for (var i=2;i<n/2;i++){
        if (n%i==0){
            prime=false;
            break
        }
    }
    if (prime==true){
        console.log(n + ' is prime');
    }else{
        console.log(n + ' is not prime')
    }
}else{
    console.log("the no. is not prime ")
}
