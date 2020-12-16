let distance = 300;  //特定距離[px]までスクロールしたら発火
window.addEventListener("scroll", function () {
    let scrollTop = document.body.scrollTop || document.documentElement.scrillTop;
    if (scrollTop > distance) {
        //指定の距離までスクロールしてきたら発火する挙動
    } else {
        //指定の距離より上にいる時に発火する挙動
    }
}, false);



let target = document.getElementById("hoge");  //特定の要素がある位置（特定の要素の上端が画面内に入る）までスクロールしたら発火
let targetLocation = target.getBoundingClientRect().top + window.pageYOffset;  //pageYOffsetがないと、「ページの上端から」指定要素上端までの距離でなく、「画面の上端から」指定要素上端までの距離になる
windowwindow.addEventListener("scroll", function () {
    let scrollTop = document.body.scrollTop || document.documentElement.scrillTop;
    if (scrollTop > targetLocation) {
        //指定要素の上端までスクロールしてきたら発火する挙動
    } else {
        //指定要素の上端より上にいる時に発火する挙動
    }
}, false);