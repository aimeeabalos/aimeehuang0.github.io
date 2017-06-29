var winheight =  $(window).height();
var winheight1 =  $(window).height()*0.70;
var winheight2 =  $(window).height()*0.33;


var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
      triggerHook: "onLeave"
  }
});

/*only for logo*/
var tweenForAimee = new TimelineMax()
  .add([
      TweenMax.from(".scroll-name div", 2, {
        y: 0,
        ease: Back.ease
      }),
      TweenMax.to(".scroll-name div", 2, {
        y: '-500vh',
        ease: Back.ease
      })
   ]);

var sceneHi = new ScrollMagic.Scene({
    duration: '100%'
  })
  .setTween(tweenForAimee)
  .setPin(".scroll-name")
  .addTo(controller);


var scencework = new ScrollMagic.Scene({
    triggerElement: "#MyWorkTitle",
    duration:700
  })
  // .addIndicators() 
  .setPin("#MyWorkTitle")
  .addTo(controller);

$(document).ready(function () {

  $("#AllWork").find(".featured").addClass("active");
  $(".nav-bar a").on("click", function() {
      var searchactive = this.parentNode.id;
      $(".image").removeClass("active");
      $(".nav-bar").find(".active").removeClass("active");
      $(this).parent().addClass("active");
      $("#AllWork").find("."+searchactive).addClass("active");
  });

  if(window.location.hash) {
      var searchtag = "";
      $(".image").removeClass("active");
      $(".nav-bar").find(".active").removeClass("active");
      if(window.location.hash == "#MyWebTitle")
      {
        searchtag = "web";
      }
      else if(window.location.hash == "#MyMobileTitle")
      {
        searchtag = "mobileui";
      }
      else if(window.location.hash == "#MyARVRTitle")
      {
        searchtag = "arvr";
      }    
      else
      {
        searchtag = "featured";
      }  
      $("#"+searchtag).addClass("active");
      $("#AllWork").find("."+searchtag).addClass("active");
      $(window).scrollTop(0);
  } else {
    // Fragment doesn't exist
  }    
});
