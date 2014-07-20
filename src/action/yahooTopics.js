/**
 * サンプル: Yahoo!トピックス自動切り替え
 */
$(function() {
    var i = 0;

    // Yahoo! Japanトップに遷移
    if (location.host.indexOf('yahoo.co.jp') == -1) {
        location.href = 'http://www.yahoo.co.jp';
    }

    setInterval(function() {
        if (i >= $('#topicsbox .tab li').size()) {
            i = 0;
        }

        // 選択中のタブの場合は次のタブを選択する
        if ($('#topicsbox .tab li').eq(i).hasClass('on')) {
            i++;
        }

        $('#topicsbox .tab li').eq(i++).find('a').get(0).click();
    }, 1000);

});