let getUrl = "https://hogehoge"; //JSONデータを吐いてくるURL
let getScript = document.createElement("script");
getScript.type = "text/javascript";
getScript.src = getUrl;
document.body.appendChild(getScript);  //bodyである必要はない

receiveData = function(jsonData){
    if(!jsonData || jsonData === "undefined"){
        result.textContent = "データなし";
    }else{
        contentShow(jsonData);
    }
}

function contentShow(data){
    //あとはdataで上記URLで吐かれるjsonデータが使える
    //もちろん個別に使いたい時はdata[キー]とか
}