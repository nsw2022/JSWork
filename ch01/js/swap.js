//변수의 값을 교환하기
let x = 0, y = 1;
let tmp;

document.write("------교환전------<br>");
document.write("x="+x+", y="+y);

//교환처리
tmp = x; //tmp=0
x=y;     //x=1
y=tmp    //y=0


document.write("<br><br>==========<br>");
document.write("<br>------교환후------<br>");
document.write("x="+x+", y="+y);