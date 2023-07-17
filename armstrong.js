var n=require("readline-sync");
var z=n.questionInt("enter the number -");
var sum=0;
// var l=len(str(z))
var temp=z;
while (temp>0){
    var r=temp%10;
    sum+=r*r*r
    temp=temp/

}
if (sum==z){
    console.log(n,"is armstrong number")
}
else{
    console.log(n,"is not armstrong number")
}