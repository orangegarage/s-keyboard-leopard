var boxAll= document.getElementsByTagName("input");
var box1031= document.getElementById("1031check");
var box0037= document.getElementById("0037check");
// chrome.browserAction.setPopup({});
function switchFunction(){
    console.log("function called");
    if(box1031.checked==true){
        xkcd1031();
    }
    else{
        uncheck1031();
    }
    if(box0037.checked==true){
        xkcd0037();
    }
    else{
        uncheck0037();
    }
}
