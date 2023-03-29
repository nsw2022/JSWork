/**
 * 각주 테스트 여기서이렇게 
 * 줄바꿈으로써도 설명이 됐던거 같음
 * 놀이공원 입장료 계산을 위한 나이변수
 */
let age =  prompt('나이를 입력해주세요','1');
age = parseInt(age);
let charge;
// if문 처리
if(age >= 8 && age < 14){
    document.write("취학전 아동입니다<br>");
    charge=1000;
   
}else if(age >=14 && age<20){
    document.write("중고등학생입니다<br>");
    charge=2000;
   
}
else{
    document.write("일반인입니다<br>");
    charge=3000;
}
 document.write("입장료는 <span class='access'>"+charge+"원</span> 입니다");