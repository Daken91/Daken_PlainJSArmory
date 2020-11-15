//二分木探索 AtCoder用
//入力データの例 AtCoderだと `prev` がない
/*root = 
TreeNode {
  val: 1,
  left:
   TreeNode {
     val: 2,
     left: TreeNode { val: 4, left: null, right: null },
     right: TreeNode { val: 5, left: null, right: null } },
  right: TreeNode { val: 3, left: null, right: null } }*/

//Main
//頂点のNodeから見ていく
function(root) {
  if(!root) return false;  //そもそも木がない
  if(!root.left && !root.right) return 0;  //頂点Nodeしかない
  var prevLeft = root.left ? true : false;  //初回の動きは左行きかどうか、左要素の有無で判別
  var prevGo = true;  //初回は「進む」
  var footPrint = [root];  //辿った軌跡（戻る挙動のため）

  var currentNode = topNode;
  footPrint.push(currentNode);

  while(1){
    if(prevGo){  //進んできたとき
      if(currentNode.left) goLeft();  //左要素があれば左に行く
      else if(currentNode.right) goRight();  //左要素がなく右要素のみあれば右に行く
      else back(); //左右要素共にない＝行き止まりなら戻る
    }else{  //戻ってきたとき
      if(currentNode === root){  //頂点Nodeまで戻ってきた
        if(!prevLeft) break;  //右から戻ってきたなら探索完了＝終了
        else if(!currentNode.right) break;  //左から戻ってきても右要素がなければ探索完了＝終了
        else goRight();  //右へ行く
      }else if(prevLeft && currentNode.right) goRight();  //左から戻ってきて頂点Nodeでない＋右要素がある→右へ行く
      else back();  //どれでもない（＝右から戻ってきた）なら戻る
    }
  }
  return 答え;

  function goLeft(){  //木の左に行く
    prevLeft = true;
    prevGo = true;
    currentNode = currentNode.left;  //Node移動
    footPrint.push(currentNode);
  }
  function goRight(){  //木の右に行く
    prevLeft = false;
    prevGo = true;
    currentNode = currentNode.right;  //Node移動
    footPrint.push(currentNode);
  }
  function back(){  //木を戻る
    if(!prevGo && currentNode === footPrint[footPrint.length-2].left) prevLeft = true;  //左から戻ってきたか右から戻ってきたかを、今の要素が一つ前の要素（footPrintから振り返る）の左か右かから判別
    if(!prevGo && currentNode === footPrint[footPrint.length-2].right) prevLeft = false;
    prevGo = false;
    currentNode = footPrint[footPrint.length-2];
    footPrint.pop();
  }
};

//コピペ用 コメントアウトを消したインスタント版
//頂点のNodeから見ていく
function(root) {
  if(!root) return false;
  if(!root.left && !root.right) return 0;
  var prevLeft = root.left ? true : false;
  var prevGo = true;
  var footPrint = [root];

  var currentNode = root;
  footPrint.push(currentNode);

  while(1){
    if(prevGo){
      if(currentNode.left) goLeft();
      else if(currentNode.right) goRight();
      else back(); 
    }else{
      if(currentNode === root){
        if(!prevLeft) break;
        else if(!currentNode.right) break;
        else goRight();
      }else if(prevLeft && currentNode.right) goRight();
      else back();
    }
  }
  return 答え;

  function goLeft(){
    prevLeft = true;
    prevGo = true;
    currentNode = currentNode.left;
    footPrint.push(currentNode);
  }
  function goRight(){
    prevLeft = false;
    prevGo = true;
    currentNode = currentNode.right;
    footPrint.push(currentNode);
  }
  function back(){
    if(!prevGo && currentNode === footPrint[footPrint.length-2].left) prevLeft = true;
    if(!prevGo && currentNode === footPrint[footPrint.length-2].right) prevLeft = false;
    prevGo = false;
    currentNode = footPrint[footPrint.length-2];
    footPrint.pop();
  }
}
