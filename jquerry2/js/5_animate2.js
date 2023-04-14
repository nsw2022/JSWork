$(document).ready(function () {
  $("button:eq(0)").click(function () {
    $(".m0")
      .animate({ left: 500 }, "fast", "swing")
      .animate({ left: 0 }, "slow", "swing");
  });
  $("button:eq(1)").click(function () {
    // $('.m1').animate({width:'100%'},"slow",function(){
    //     $(this).animate({width:'0%'},"slow")
    // })
    // 이동할때는 오른쪽 500px만큼 이동
    $(".m1")
      .animate({ left: 500 }, "fast", "swing")
      .animate({ left: 0 }, "slow", function () {
        $(this).find("span").animate({ top: 10 }, "fast", "swing");
      });
  });
  $("button:eq(2)").click(function () {
    $(".m2").animate({ width: "toggle" }, "fast", "swing");
  });
});
