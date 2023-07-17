var a= require("readline-sync");
var b=a.questionInt("enter the number:--")
for(var i=1 ;i<=b*10;i++){
    if (i%b==0){
        console.log(i)
    }
}