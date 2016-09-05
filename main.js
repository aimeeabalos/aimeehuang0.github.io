

/*set active when click*/
function setActive(n) {
   aObj = document.getElementById('navigation').getElementsByTagName('a');
   for(i=0;i<aObj.length;i++) {

     if(i == n) {
       aObj[i].className='active';
     }
     else
     {
      aObj[i].className='';
     }
   }
 }


function setScrollXY() {
    if (document.body.scrollTop >= 0 && document.body.scrollTop < 480) {
        setActive(1);
    } 
    else //if (document.body.scrollTop >= 500 && document.body.scrollTop < 1000) {
        setActive(0);
} 

function BackToTop(){
  window.scrollTo(0, 0);
}

/*sliding modified from Jed Day 10 slide*/

 var slideIndex = 1;
// showSlide(slideIndex);

function switchSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
    var i;
    var slidesArray = document.getElementsByClassName("workslide");
    
    if (n > slidesArray.length) {
         slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slidesArray.length
    } ;

    for (i = 0; i < slidesArray.length; i++) {
       slidesArray[i].className = slidesArray[i].className.replace("fadeImage", "");
    }
    slidesArray[slideIndex-1].className += " fadeImage";
}

window.setInterval(function(){
    switchSlide(1)
}, 10000);