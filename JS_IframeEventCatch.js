window.addEventListener("message", function (event) {
    try{
        let {data, origin, timeStamp} = event;
        console.table({data, origin, timeStamp});
        //data "frameLoaded", "frameStarted", "resizeFrame", "frameScrolled"などiframeの状態や中に含まれるデータの詳細などが入る　実際に確かめてみるのがいい
        //origin iframeのsrcに入るURLのドメイン（srcがある場合のみ）
        //timeStamp ページのロードから？そのイベントが起こったタイミングまでのミリ秒数
    } catch (e) {
        console.error(e);
    }
    return;
}, false);