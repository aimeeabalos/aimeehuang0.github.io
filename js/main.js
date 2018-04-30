var winheight =  $(window).height();
var winheight1 =  $(window).height()*0.70;
var winheight2 =  $(window).height()*0.33;


var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
      triggerHook: "onLeave"
  }
});

/*only for logo*/
// var tweenForAimee = new TimelineMax()
//   .add([
//       TweenMax.from(".scroll-name div", 2, {
//         y: 0,
//         ease: Back.ease
//       }),
//       TweenMax.to(".scroll-name div", 2, {
//         y: '-500vh',
//         ease: Back.ease
//       })
//    ]);

// var sceneHi = new ScrollMagic.Scene({
//     duration: '100%'
//   })
//   .setTween(tweenForAimee)
//   .setPin(".scroll-name")
//   .addTo(controller);


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
      if(window.location.hash == "#MyGameTitle")
      {
        searchtag = "game";
        $(window).scrollTop(0);
      }
      else if(window.location.hash == "#MyWebTitle")
      {
        searchtag = "mobileui";
        $(window).scrollTop(0);
      }
      else if(window.location.hash == "#MyMobileTitle")
      {
        searchtag = "mobileui";
        $(window).scrollTop(0);
      }
      else if(window.location.hash == "#MyARVRTitle")
      {
        searchtag = "arvr";
        $(window).scrollTop(0);
      }
      else
      {
        searchtag = "featured";
      }
      $("#"+searchtag).addClass("active");
      $("#AllWork").find("."+searchtag).addClass("active");
      // $(window).scrollTop(0);
  } else {
    // Fragment doesn't exist
  }
});

var TxtType = function(el, toRotate, period) {
		        this.toRotate = toRotate ;
		        this.el = el;
		        this.loopNum = 0;
		        this.period = parseInt(period, 10) || 2000;
		        this.txt = '';
		        this.tick();
		        this.isDeleting = false;
		    };

		    TxtType.prototype.tick = function() {
		        var i = this.loopNum % this.toRotate.length;
		        var fullTxt = this.toRotate[i];

		        if (this.isDeleting) {
		        this.txt = fullTxt.substring(0, this.txt.length - 1);
		        } else {
		        this.txt = fullTxt.substring(0, this.txt.length + 1);
		        }

		        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

		        var that = this;
		        var delta = 200 - Math.random() * 100;

		        if (this.isDeleting) { delta /= 2; }

		        if (!this.isDeleting && this.txt === fullTxt) {
		        delta = this.period;
		        this.isDeleting = true;
		        } else if (this.isDeleting && this.txt === '') {
		        this.isDeleting = false;
		        this.loopNum++;
		        delta = 500;
		        }

		        setTimeout(function() {
		        that.tick();
		        }, delta);
		    };

		    window.onload = function() {
		        var elements = document.getElementsByClassName('typewrite');
		        for (var i=0; i<elements.length; i++) {
		            var toRotate = elements[i].getAttribute('data-type');
		            var period = elements[i].getAttribute('data-period');
		            if (toRotate) {
		              new TxtType(elements[i], JSON.parse(toRotate), period);
		            }
		        }
		        // INJECT CSS
		        var css = document.createElement("style");
		        css.type = "text/css";
		        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #000}";
		        document.body.appendChild(css);
		    };
