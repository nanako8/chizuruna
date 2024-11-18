// jQueryが読み込まれたことを確認してから実行
$(document).ready(function () {
  console.log("jQuery version:", $.fn.jquery); // jQueryのバージョンを確認

  // メニューのクリックイベント
  $(".menu-list > li").on("click", function (e) {
    e.preventDefault();
    console.log("Clicked"); // クリックイベントの確認

    // クリックされた要素のdata-target属性を取得
    var targetId = $(this).data("target");
    console.log("Target ID:", targetId);

    // スクロール先の要素を取得
    var $target = $("#" + targetId);

    if ($target.length > 0) {
      // スクロール位置を計算
      var position = $target.offset().top;
      console.log("Scroll position:", position);

      // スクロールアニメーション
      $("html, body").animate(
        {
          scrollTop: position,
        },
        300
      );

      // メニューボタンのチェックを外す
      $(".menu-btn").prop("checked", false);
    }
  });
});
