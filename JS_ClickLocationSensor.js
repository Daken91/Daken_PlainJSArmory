//クリックした箇所に特定の種類のタグ（aタグとか）があるかどうかを調べてtrue/falseを返すだけのコード
let isElementTagList = ["A", "IMG", "VIDEO"];  //クリックした箇所にあるかどうか調べたいタグの種類　←の例だとaタグ、imgタグ、videoタグ
window.addEventListener("click", function (e) {  //クリックした箇所でのイベントを取りたいのでe（eventとかでもいい）を引数に入れる
    let isElementTag = false;
    let clickPath = e.path;  //.pathでクリックした箇所の（一番上の？）HTML要素が取れる
    for (let i=0; i<clickPath.length; i++) {
        if (isElementTagList.some(value => value === clickPath[i].tagName)) isElementTag = true;  //クリックした箇所に指定のタグがあればtrue
    }
}, false);
//あとはtrue/falseを元に色々やるだけ　長さ（クリック箇所に何個タグがネストされているか）測るとかもできる
