let observer = new MutationObserver ( function (mutations)) {  //mutationsに起こった変化の種類が入っている .typeで取り出せる
    //対象に変化があった際に行ないたい挙動を書く
});

observer.observe(/*監視対象ノード*/, {
    //監視対象のどこまで監視するかのオプション　必要なものだけ書けばいい
    attributes: true,  //対象ノードの属性を監視する場合
    characterData: true,  //対象ノード内のデータ（innerTextとか）を監視する場合
    childList: true,  //対象ノードの子ノードも監視する場合
    subtree: true  //対象ノードの子孫ノードも監視する場合
})

//あるいは
let config = {
    //監視対象のどこまで監視するかのオプション　必要なものだけ書けばいい
    attributes: true,  //対象ノードの属性を監視する場合
    characterData: true,  //対象ノード内のデータ（innerTextとか）を監視する場合
    childList: true,  //対象ノードの子ノードも監視する場合
    subtree: true  //対象ノードの子孫ノードも監視する場合
}

observer.observe(/*監視対象ノード*/, config);

//observer.disconnect(); で監視を終了できる（≒以降監視対象ノードに変化があっても何もしないようにできる？）
//MutationObserver内にも書ける