//なんかうまいこと使いまわせそうなコード　JavaScript系

//乱数（0~1）を作る
var random = Math.random();

//配列の値をすべて数値（Int型）に変換
配列 = 配列.map(function(value){ return parseInt(value);});

//配列の値（数値）を昇順に並び替え
配列 = 配列.sort(function(a, b){return a-b;});

//配列の値（数値）を降順「に並び替え
配列 = 配列.sort(function(a, b){return b-a;});

//配列内要素のindex番目（≧0）のものを削除する
array.splice(index, 1);
//別解　ただしこのfilter使う形式だと要素数が多い場合処理が重い
newArray = array.filter(n => n !== index);

//配列の値（数値？）から重複を削除 ※順番に並んでいないとNG（2,5,2,3,5 など途中に別の値が挟まっていると重複も排除できない）
配列 = 配列.filter(function(value, index, array) {if(value !== array[index-1]) return value});
//以下3つ、パクリ元 → https://qiita.com/cocottejs/items/7afe6d5f27ee7c36c61f
//配列の値（数値）から重複を削除し、すべての要素一個ずつ出す（2,5,2,3,5 → 2,5,3）
配列 = 配列.filter(function (x, index, array) {return array.indexOf(x) === index;});
//パクリ元 → https://qiita.com/piroor/items/02885998c9f76f45bfa0
配列 = Array.from(new Set(配列));
//配列の値（数値）から重複している要素を全て削除し、一個しか無い要素のみにする（2,5,2,3,5 → 3）
配列 = 配列.filter(function (x, index, array) {return array.indexOf(x) === index && index === array.lastIndexOf(x);});
//配列の値（数値）から重複していない要素を全て削除し、重複している要素のみ（各1個ずつ）にする（2,5,2,3,5 → 2,5）
配列 = 配列.filter(function (x, index, array) {return array.indexOf(x) !== index && index === array.lastIndexOf(x);});

//配列中の数値をすべて足し合わせる
答え = 配列.reduce(function(all, value){ return all + value; });
答え = 配列.map(function(value){ return parseInt(value); }).reduce(function(all, value){ return all + value; }); //配列内の値がInt型でない場合

//数値（Integer）を逆転させる（Ex: 14562 → 26541、 -3671 → -1763、 120 → 21）
var minus = false;
if(数値 < 0) minus = true;
数値 = parseInt(数値.toString().split("").reverse().join(""));
if(minus) 数値 *= -1;

//配列内の前からi個／後ろからi個を選んで表示する
配列.slice(0,i);
配列.slice(-i);