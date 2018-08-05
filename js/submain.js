var words = ["HELLO","BONJOUR", "HOLA", "CIAO", "NAMASTE", "SALAAM", "Здравствуйте", "مرحبا", "你好", "こんにちは", "안녕하세요", "สวัสดี", "OLA", "ALOHA","SALAM","AHOJ","SAlVE","MERHABA","سلام"];

// $(document).ready(function() { alert("yeah"); });

window.addEventListener("load", function() {
    var randoms = window.document.getElementsByClassName("randoms");
    for (i = 0; i < randoms.length; i++)
        changeWord(randoms[i]);
}, false);

function changeWord(a) {
    a.style.opacity = '0.1';
    a.innerHTML = words[getRandomInt(0, words.length - 1)];
    setTimeout(function() {
        a.style.opacity = '1';
    }, 425);
    setTimeout(function() {
        changeWord(a);
    }, getRandomInt(500, 800));
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*slider js*/
$('.slider').each(function() {
  var $this = $(this);
  var $group = $this.find('.slide_group');
  var $slides = $this.find('.slide');
  var bulletArray = [];
  var currentIndex = 0;
  var timeout;

  function move(newIndex) {
    var animateLeft, slideLeft;

    advance();

    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }

    bulletArray[currentIndex].removeClass('active');
    bulletArray[newIndex].addClass('active');

    if (newIndex > currentIndex) {
      slideLeft = '100%';
      animateLeft = '-100%';
    } else {
      slideLeft = '-100%';
      animateLeft = '100%';
    }

    $slides.eq(newIndex).css({
      display: 'block',
      left: slideLeft
    });
    $group.animate({
      left: animateLeft
    }, function() {
      $slides.eq(currentIndex).css({
        display: 'none'
      });
      $slides.eq(newIndex).css({
        left: 0
      });
      $group.css({
        left: 0
      });
      currentIndex = newIndex;
    });
  }

  function advance() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    }, 4000);
  }

  $('.next_btn').on('click', function() {
    if (currentIndex < ($slides.length - 1)) {
      move(currentIndex + 1);
    } else {
      move(0);
    }
  });

  $('.previous_btn').on('click', function() {
    if (currentIndex !== 0) {
      move(currentIndex - 1);
    } else {
      move(3);
    }
  });

  $.each($slides, function(index) {
    var $button = $('<a class="slide_btn">&bull;</a>');

    if (index === currentIndex) {
      $button.addClass('active');
    }
    $button.on('click', function() {
      move(index);
    }).appendTo('.slide_buttons');
    bulletArray.push($button);
  });

  advance();
});
