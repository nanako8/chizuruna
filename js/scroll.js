$(function () {
  var menu_list = $(".menu-list > li");
  var body = $("body");

  //menu_listがクリックされた時の処理
  menu_list.click(function () {
    //クリックされた要素のhrefを取得
    var menu = $(this).attr("href");
    //スクロール位置
    var scroll_point = $(menu).offset().top;

    body.animate(
      {
        scrollTop: scroll_point,
      },
      800
    );
  });
});
