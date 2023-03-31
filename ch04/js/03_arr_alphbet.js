// 배열에 알파벳 대문자 저장
let alphbet = new Array(26)
let char = 'A'

// // 아스키코드를 찾는 함수
char = char.charCodeAt(0) // 0번 인덱스
// console.log(char) // code - 65 (ASCII - 아스키코드)

// char++ // char = char + 1
// console.log(char) //66

// // 문자로 출력해주는 함수 String.fromCharCode(ch)
// console.log(String.fromCharCode(char))

// 배열에 저장(입력)
/*
    alphbet[0] = ch
    alphbet[1] = ch + 1
    alphbet[2] = ch + 2
*/
for(var i=0; i<alphbet.length;i++){
    alphbet[i] = char
    char++
}
console.log(String.fromCharCode(char))

//출력
for(var i=0; i<alphbet.length;i++){
    document.write(alphbet[i] + ", "
    + String.fromCharCode(alphbet[i])+"<br>")
}
