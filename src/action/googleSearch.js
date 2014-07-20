/**
 * サンプル: google検索
 */
$(function() {
    // Googleトップに遷移
    if (location.host.indexOf('google.co.jp') == -1) {
        location.href = 'http://www.google.com';
    }

    // フォームに値を入力
    $('#gbqfq').val('chrome-extention-template')
});