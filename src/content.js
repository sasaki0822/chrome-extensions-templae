var chromeExTemp = {
    /**
     * extentionsのアイコン設定
     * @param {boolean} isStop
     */
    setIcon: function(isStop) {
        chrome.browserAction.setIcon({
            path: '../icon/icon-128' + (isStop ? '-off' : '') + '.png'
        });
    },

    /**
     * スクリプト実行
     * @param {string} action
     */
    runScript: function(action) {
        var scriptName = 'src/action/'+ action +'.js';
        chrome.tabs.executeScript(null, {file: "src/libs/jquery-1.11.1.min.js"}, function() {
            chrome.tabs.executeScript(null, {file: scriptName});
        });
    },

    /**
     * スクリプトのリセット
     */
    resetScript: function() {
        chrome.tabs.executeScript(null, {file: 'src/action/reset.js'});
    }
};

// タブのイベント設定
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    // completeするまで待機
    if (changeInfo.status != "complete") { return; }

    // 実行中かどうか確認
    chrome.storage.sync.get('status', function (obj) {
        if (obj.status) {
            chrome.storage.sync.get('action', function (obj) {
                if (obj.action) chromeExTemp.runScript(obj.action);
            });
        }
    });
});