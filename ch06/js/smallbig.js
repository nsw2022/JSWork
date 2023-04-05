// 이미지 바꾸기

/** 사진배열에 반응할 친구 */
let bigPic = document.getElementById('cup')
let smallPic = document.querySelectorAll('.small')
console.log(smallPic.length)

//클릭 이벤트 발생
for(i=0;i<smallPic.length;i++){
    // smallPic[i].onclick = showBig // showBig() 호출
    // addEventListener() 이벤트 처리기(접두어,'on'을 붙혀준다)
    smallPic[i].addEventListener("mouseover",function(){
        bigPic.setAttribute("src",this.src)
        console.log(this.src)
    })
}

// function showBig(){
//     bigPic.setAttribute("src",this.src)
//     // console.log(this.src) // 클릭한 대상(자기자신)
// }