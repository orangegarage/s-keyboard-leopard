function xkcd1031(){
    var elements= document.getElementsByTagName('*');  /* * means that getting all elements in the browser https://stackoverflow.com/questions/12823264/get-all-elements-in-the-body-tag-using-pure-javascript*/
    for (var i=0; i<elements.length; i++) {
        var inner= elements[i]; /*go down the list, get each inner element of the elements*/
//        console.log(inner);
        for (var j=0; j<inner.childNodes.length; j++) { /*childNodes -> getting collection of body element's child nodes*/
            var node= inner.childNodes[j]; /*go down the list of selected elements childnodes*/
//            console.log(node);
            if (node.nodeType===3) { /*nodetype 3 is TEXT_NODE https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType)*/
//                console.log("found the textnode");
                var toreplace= node.nodeValue;
                var replaced= toreplace.replace(/keyboard/gi, "leopard"); /*gi is global, case insensitive replacement*/
//                console.log(replaced);
//innerHTML change isn't working, what can we do to circumvent this? We're changing Nodes... https://developer.mozilla.org/en-US/docs/Web/API/Node
                inner.replaceChild(document.createTextNode(replaced),node); //replace sp2 with sp1 -> replace var node with replaced. But replaced is not type Node
            }
        }
    }
} //replace close - take out function to just make it auto - way to toggle via extension?

/* Go down the document, get each element.
Go down the list of each element's child nodes.
Of the childnodes, if it is a text node, replace the text globally, with a case insensitive replacement.
after replacing text, need add it to html again. getElementByTagName/ID and setting <- was not the answer, refer to code above*/

function uncheck1031(){
    var elements= document.getElementsByTagName('*'); 
    for (var i=0; i<elements.length; i++) {
        var inner= elements[i];
        for (var j=0; j<inner.childNodes.length; j++) {
            var node= inner.childNodes[j];
            if (node.nodeType===3) {
                var toreplace= node.nodeValue;
                var replaced= toreplace.replace(/leopard/gi, "keyboard");
                inner.replaceChild(document.createTextNode(replaced),node);
            }
        }
    }
}