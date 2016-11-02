var winheight =  $(window).height();

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
        y: -500,
        ease: Back.ease
      })
   ]);

var sceneHi = new ScrollMagic.Scene({
    duration: '100%'
  })
  // .addIndicators() 
  .setTween(tweenForAimee)
  .setPin(".scroll-name")
  .addTo(controller);


var picUp = new ScrollMagic.Scene({
  triggerElement: "#MyProject", // point of execution
  duration: $(window).height()*0.69, // pin element for the window height - 1
  triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
})
// .addIndicators() 
.setPin("#AllProject")
.addTo(controller); // the element we want to pin

var twinDesc = new TimelineMax()
  .add([
      TweenMax.from(".caseIntro", 1, {
        y: 0,
      }),
      TweenMax.to(".caseIntro", 1, {
        y: winheight*0.33,
      })
   ]);

var sceneDesc = new ScrollMagic.Scene({
    triggerElement: "#MyProject",
    duration: $(window).height()*0.33
  })
  // .addIndicators() 
  .setTween(twinDesc)
  .addTo(controller);

// var twinwork = new TimelineMax()
// .add([
//     TweenMax.from("#MyWork", 1, {
//       y: 0,
//     }),
//     TweenMax.to("#MyWork", 1, {
//       y: winheight-1000,
//     })
//  ]);

var scencework = new ScrollMagic.Scene({
    triggerElement: "#MyWorkTitle",
    duration:1000
  })
  // .addIndicators() 
  .setPin("#MyWorkTitle")
  .addTo(controller);

// var workUp = new ScrollMagic.Scene({
//   triggerElement: "#MyWorkTitle", // point of execution
//   duration: $(window).height()*0.33, // pin element for the window height - 1
// })
// .addIndicators() 
// .setPin("#MyWorkTitle")
// .addTo(controller); // the element we want to pin
