function xkcd0037(){
    var elements = document.getElementsByTagName('*');
    for(var i=0; i<elements.length; i++){
        var inner= elements[i];
        for(var j=0; j<inner.childNodes.length; j++){
            var node= inner.childNodes[j];
            if(node.nodeType===3){
                var toreplace=node.nodeValue;
                var replaced= toreplace.replace(/-ass /gi, " ass-");
                inner.replaceChild(document.createTextNode(replaced),node);
            }
        }
    }
}

function uncheck0037(){
    var elements= document.getElementsByTagName('*'); 
    for (var i=0; i<elements.length; i++) {
        var inner= elements[i];
        for (var j=0; j<inner.childNodes.length; j++) {
            var node= inner.childNodes[j];
            if (node.nodeType===3) {
                var toreplace= node.nodeValue;
                var replaced= toreplace.replace(/ ass-/gi, "-ass ");
                inner.replaceChild(document.createTextNode(replaced),node);
            }
        }
    }
}
/*bonus feature - if find '-ass' in text, shift it so its 'ass-'*/