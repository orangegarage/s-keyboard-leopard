# s-keyboard-leopard


To add:

~~Popup with toggleable button/sliders << index.html~~ <Added

<b>1. What is this project?</b>

JavaScript chrome extension that replaces all instances of a word with another in a broswer text with CSS toggle on or off butttons.


<b>2. Inspiration</b>

<a href="https://xkcd.com/1031/">xkcd1031</a> and <a href="https://xkcd.com/37/">xkcd37</a>


<b>3. Technology used</b>

JavaScript (ES6), HTML 5, CSS 3


<b>4. Challenges faced / things learned</b>

First time having my code interacting with browser elements that I hadn't made myself. I had to search for something that all html contained. DOM method GetElementsByTagName came in very handy in that area. I then had to tackle how to identify if an element was 'text' so I could switch it. Google (and the original xkcd) resulted in me going through REGEX information but I realized that for someting lightweight like I was looking for, I may be looking in the wrong area. I found something I was looking for in <a href="https://developer.mozilla.org/en-US/docs/Web/API/Node">Nodes</a> and utilized the childNodes to get the internal elements of Tags, then looked through the <a href="https://www.w3schools.com/jsref/prop_node_nodetype.asp">NodeType</a> to confirm whether the innermost node was in text form.
