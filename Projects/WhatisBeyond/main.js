var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight);

window.onload = function(){
 setTimeout(function(){
 	document.getElementById('myContent').scrollTop = height;
 }, 100);

 setTimeout(function(){
	 pageScroll();
}, 1000);

};

function pageScroll() {
	//  setTimeout(function(){
	// 	window.scrollBy(0,-10);
	// }, 2300);
    	window.scrollBy(0,-1); // horizontal and vertical scroll increments
    	scrolldelay = setTimeout('pageScroll()',20); // scrolls every 100 milliseconds
}