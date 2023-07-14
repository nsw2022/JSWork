
// let toggleBtn = document.querySelector('.navbar_toggleBtn');
// let menu = document.querySelector('.navbar_menu');

// toggleBtn.addEventListener('click', function(){
//     menu.classList.toggle('active'); // active 스타일 추가 및 삭제
// })

$(document).ready(function() {
    // 메뉴바를 클릭했을때 이벤트
    $('.navbar_toggleBtn').click(function() {
      $('.navbar_menu').slideToggle('active');
    });
});

// 윈도우 크기를 조절하는 기능
$(window).resize(function(){
    if($(window).width() > 768){
        $('.navbar_menu').css('display','flex');
    }
});
// $(document).ready(function() {
//     $('.navbar_toggleBtn').click(function() {
//       $('.navbar_menu').fadeIn('fast'); // 나타나는 애니메이션
//     });
  
//     $('.navbar_toggleBtn').dblclick(function() {
//       $('.navbar_menu').fadeOut('slow'); // 사라지는 애니메이션
//     });
//   });