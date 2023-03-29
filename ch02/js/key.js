/**
 * 'y'키를 누르면 "계속 반복", 'n'키를 누르면 "반복 중단"
 * 대문자도 가능하게
 * 그 이외의 키는 "키를 잘못눌렀습니다." 
*/
while(true){
    let key = prompt("계속 반복 할ㄲㅏ요?","y/n");

    if(key == 'y'|| key=='Y'){
        alert("계속 반복합니다")
    }else if(key == 'n'||key=='N'){
        alert("반복을 중단합니다.");
        break;
    }else{
        alert("키를 잘못 눌럿습니다.");
    }
}
document.write("프로그램 종료")