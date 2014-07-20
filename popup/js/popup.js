$(function() {
    var bg = chrome.extension.getBackgroundPage(),
        $menuList = $('#jsiMenuList');

    // メニューボタンにclickイベント設定
    $('.jscMenu').on('click', function() {
        var action = $(this).attr('data-action') || '',
            isStop = (action === 'stop');

        // メニューリストの更新
        $menuList.toggleClass('running', !isStop);

        // ステータスの設定
        chrome.storage.sync.set({'status': !isStop});

        // アイコン設定
        bg.chromeExTemp.setIcon(isStop);

        if (isStop) {
            chrome.storage.sync.set({'action': ''});
            bg.chromeExTemp.resetScript();
        } else {
            // スクリプト実行
            chrome.storage.sync.set({'action': action});
            bg.chromeExTemp.runScript(action);
        }

        window.close();
    });

    // 実行中かどうか確認
    chrome.storage.sync.get('status', function (obj) {
        $menuList.toggleClass('running', !!obj.status);
    });
});