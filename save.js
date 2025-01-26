// "画像で保存" ボタンがクリックされたときに実行される関数
document.getElementById('capture').addEventListener('click', function() {
    // スクリーンショットを撮る対象の要素を指定
    var element = document.getElementById('content');  // ここでは #content 要素

    // html2canvasを使ってスクリーンショットを撮る
    html2canvas(element).then(function(canvas) {
        // 画像データURLを取得
        var imgData = canvas.toDataURL("image/png");

        // ダウンロードリンクを作成
        var link = document.createElement('a');
        link.href = imgData;              // 画像データのURLをリンクに設定
        link.download = 'score.png';       // 保存するファイル名
        link.click();                     // ダウンロードリンクをクリックして画像を保存
        
        // ダウンロード完了メッセージを表示
        var downloadMessage = document.getElementById('downloadMessage');
        downloadMessage.style.display = 'block'; // メッセージを表示

        // 2秒後にメッセージを非表示にする
        setTimeout(function() {
            downloadMessage.style.display = 'none';
        }, 2000);  // 2秒後にメッセージを非表示
    });
});
