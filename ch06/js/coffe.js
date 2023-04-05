// 이미지 바꾸기

/** 사진배열에 반응할 친구 */
let bigPic = document.getElementById('cup')
let smallPic = document.querySelectorAll('.small')
console.log(smallPic.length)

//클릭 이벤트 발생
for(i=0;i<smallPic.length;i++){
    // addEventListener() 이벤트 처리기(접두어,'on'을 붙혀준다)
    smallPic[i].addEventListener("click",function(){
        bigPic.setAttribute("src",this.src)
        console.log(this.src)
    })
}

// 상세 설명 보기
let view = document.getElementById('view')
let detail = document.getElementById('detail')

// 토글 프로그래밍
let sw = true
view.addEventListener("click",function(){
    if(sw){
        detail.style.display="block"
        view.innerText="상세 설명 닫기"
        sw=false
    }else{
        detail.style.display="none"
        view.innerText="상세 설명 보기"
        sw=true
    }
})

// 스크롤바 죽임 진짜 죽여서 스크롤이 안됨 css에서 테스트 -> 잘됨 굳
// document.body.style.overflow="hidden"
