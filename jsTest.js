document.write("document.write结果：HelloWorld")

var x = 8888888888;
var flag = true;
var message = "web_test8";
di = document.getElementById("demo").getElementsByTagName("p")
di[0].innerHTML=x;
di[1].innerHTML=flag;
di[2].innerHTML=message;

x = 8;
y = 9;
document.write("<br>两数相乘结果："+x*y+"<br>");

for(var i = 0;i<=20;i++){
    if(i%2==1){
        document.write(i+'<br>')
    }
}


// var x = 100,y=90;
// if(x>y){
//     window.alert("x>y")
// }
// else{
//     window.alert("x<=y")
// }