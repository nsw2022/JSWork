// 체크 박스 속성에 이벤트 처리하기
window.onload = function(){// 익명 실행 함수
    // 체크 박스 속성에 이벤트 처리하기
    let check = document.querySelector('#shippingInfo')
    
    // 체크 이벤트 
    check.addEventListener("click",checkBox)
    
    let billingName = document.getElementById('billingName')
    let billinTel = document.getElementById('billinTel')
    let billingAddr = document.getElementById('billingAddr')
    
    let shippingName = document.getElementById("shippingName")
    let shippingTel = document.getElementById("shippingTel")
    let shippingAddr = document.getElementById("shippingAddr")
    
    function checkBox(){
        if(check.checked == true){
            shippingName.value = billingName.value
            shippingTel.value = billinTel.value
            shippingAddr.value = billingAddr.value
        }else{
            shippingName.value = ""
            shippingTel.value = ""
            shippingAddr.value = ""
        }
    }
}