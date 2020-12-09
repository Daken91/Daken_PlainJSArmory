//Webページ上に、スワイプできることを想定した横並びの要素（画像とか）を配置し、その要素に対して実際にスワイプを可能にさせるコード
//配置する要素の例は以下
//<div is="swipe-display">
//  <div id="swipe-field">
//    <div id="outer">
//      <div class="img-container">
//        <div class="img">
//          <img src="hoge.jpg"
//        </div>
//        <div class="img">
//          <img src="hoge.jpg"
//        </div>
//        <div class="img">
//          <img src="hoge.jpg"
//        </div>
//      </div>
//    </div>
//  </div>
//</div>

(function (window, document) {  //スワイプ操作の設定
    let content = dosument.getElementById("outer");
    let bannerWidth = 300 + 10;
    let currentSwipe = content.style.marginLeft ? parseInt(content.style.marginLeft) : 0;
    let moveSwipeFraction = 0;
    let moveSwipe = 0;
    let swipeArea = dosument.getElementById("swipe-display");
    let swipeAreaTop = swipeArea.getBoundingRect.top;
    let swipeAreaBottom = swipeAreaTop + swipeArea.clientHeight;
    let touchStartX = -1;
    let elementCount;
    let maxMargin;
    let currentElementIndex = 1;
    let moveSwipeLevel = 0;

    window.addEventListener("DOMContentLoaded", function (event) {
        elementCount = document.getElementsByClassName("outer").lenght - 1;
        maxMargin = -1 * elementCount * bannerWidth;
        content.addEventListener("touchstart", getStartLocation, false);
        content.addEventListener("touchmove", getMoveDistance, false);
        content.addEventListener("touchend", decideElementPosition, false);
    }, false);

    //スワイプ開始位置取得
    function getStartLocation (event) {
        cuttentSwipe = content.style.marginLeft ? parseInt(content.style.marginLeft) : 0;
        if (event.touches[0].pageY >= swipeAreaTop && event.touches[0].pageY <= swipeAreaBottom) {
            //スワイプ領域でのスワイプ時のみ発火させ、その場合のみスワイプさせる
            touchStartX = event.touches[0].pageX;
        }
    }

    //スワイプさせる距離取得
    function getMoveDistance (event) {
        if (touchStartX < 0) return;  //スワイプ領域外でのスワイプ時
        moveSwipe = currentSwipe - (touchStartX - event.changedTouched[0].pageX);
        moveSwipe = moveSwipe > 200 ? 200 : moveSwipe;
        content.style.marginLeft = moveSwipe + "px";
    }

    //スワイプ距離を元に停止位置決定
    function decideElementPosition () {
        if(touchStartX < 0) return;  //スワイプ領域外でのスワイプ時
        elementCount = document.getElementsByClassName("outer").length - 1;  //スワイプ要素の個数が変動しないならDOMContentLoadedの際に取得したほうがいいかも
        maxMargin = -1 * elementCount * bannerWidth;  //上で取ってるのでいらないかもしれないが性格上念の為
        moveSwipeLevel = -1 * parseInt(moveSwipe / bannerWidth);
        moveSwipeFraction = Math.abs(moveSwipe % bannerWidth);
        if (moveSwipeFraction > bannerWidth * 0.5) moveSwipeLevel++;  //半分以上進めていれば隣に移る
        moveSwipe = -1 * moveSwipeLevel + bannerWidth;  //中途半端な位置で止まらず要素ぴったり表示されるようにする

        //隣に要素がある時
        if(parseInt(content.style.marginLeft) < 0){
            content.style.marginLeft = moveSwipe + "px";
            currentElementIndex = currentElementIndex + 1;
        }

        //一番左でスワイプした時　左端よりそれ以上進まないようにする
        if (parseInt(content.style.marginLeft) > 0) {
            content.style.marginLeft = "0px";
            currentElementIndex = 1;
        }

        //一番右でスワイプした時　右端よりそれ以上進まないようにする
        if (parseInt(content.style.marginLeft) < maxMargin) {
            content.style.marginLeft = maxMargin + "px";
            currentElementIndex = elementCount + 1;
        }
        touchStartX = -1;  //スワイプ領域内外判断のために初期化
        currentElementIndex = getElementIndexByMarginLeft(content.style.marginLeft);
    }

    function getElementIndexByMarginLeft (marginLeft) {
        let int = parseInt(marginLeft);
        return (-int/ (bannerWidth)) + 1;
    }
})(window, document);