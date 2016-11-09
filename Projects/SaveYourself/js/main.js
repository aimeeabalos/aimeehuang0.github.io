var MyPoint = 0;


//char position
var posx = 0;
var posy = 0;
var posxspeed = 0;
var posyspeed = 0;
var airBalloon;
var NORTH=false,SOUTH=false,EAST=false,WEST=false;
var charImage;
const charURL = 'http:' + '//aimemee.com/Projects/SaveYourself/img/Balloon.png';

// Position Variables
var x = 0;
var y = 0;
var z = 0;

// Speed - Velocity
var vx = 0;
var vy = 0;
var vz = 0;

// Acceleration
var ax = 0;
var ay = 0;
var az = 0;
var ai = 0;
var arAlpha = 0;
var arBeta = 0;
var arGamma = 0;

var delay = 100;
var vMultiplier = 0.01;     var alpha = 0;

var alpha = 0;
var beta = 0;
var gamma = 0;


if (window.DeviceMotionEvent==undefined) {
document.getElementById("no").style.display="block";
document.getElementById("yes").style.display="none";
} 
else {
window.ondevicemotion = function(event) {
  ax = Math.round(Math.abs(event.accelerationIncludingGravity.x * 1));
  ay = Math.round(Math.abs(event.accelerationIncludingGravity.y * 1));
  az = Math.round(Math.abs(event.accelerationIncludingGravity.z * 1));    
  ai = Math.round(event.interval * 100) / 100;
  rR = event.rotationRate;
  if (rR != null) {
    arAlpha = Math.round(rR.alpha);
    arBeta = Math.round(rR.beta);
    arGamma = Math.round(rR.gamma);
  }

/*          
  ax = Math.abs(event.acceleration.x * 1000);
  ay = Math.abs(event.acceleration.y * 1000);
  az = Math.abs(event.acceleration.z * 1000);   
*/        
}

window.ondeviceorientation = function(event) {
  alpha = Math.round(event.alpha);
  beta = Math.round(event.beta);
  gamma = Math.round(event.gamma);
}       

function d2h(d) {return d.toString(16);}
function h2d(h) {return parseInt(h,16);}

function makecolor(a, b, c) {
  red = Math.abs(a) % 255;
  green = Math.abs(b) % 255;
  blue = Math.abs(c) % 255;
  return "#" + d2h(red) + d2h(green) + d2h(blue);
}

function makeacceleratedcolor(a, b, c) {
  red = Math.round(Math.abs(a + az) % 255);
  green = Math.round(Math.abs(b + ay) % 255);
  blue = Math.round(Math.abs(c + az) % 255);
  return "#" + d2h(red) + d2h(green) + d2h(blue);
}

setInterval(function() {
  // document.getElementById("xlabel").innerHTML = "X: " + ax;
  // document.getElementById("ylabel").innerHTML = "Y: " + ay;
  // document.getElementById("zlabel").innerHTML = "Z: " + az;                   
  // document.getElementById("ilabel").innerHTML = "I: " + ai;                   
  // document.getElementById("arAlphaLabel").innerHTML = "arA: " + arAlpha;                              
  // document.getElementById("arBetaLabel").innerHTML = "arB: " + arBeta;
  // document.getElementById("arGammaLabel").innerHTML = "arG: " + arGamma;                                                  
  // document.getElementById("alphalabel").innerHTML = "Alpha: " + alpha;
  // document.getElementById("betalabel").innerHTML = "Beta: " + beta;
  // document.getElementById("gammalabel").innerHTML = "Gamma: " + gamma;

  // document.getElementById("accelcolor").innerHTML = "Color: " + makecolor(ax, ay, az);
  // document.getElementById("accelcolor").style.background = makecolor(ax, ay, az);
  // document.getElementById("accelcolor").style.color = "#FFFFFF";
  // document.getElementById("accelcolor").style.fontWeight = "bold";

  // document.getElementById("gyrocolor").innerHTML = "Color: " + makecolor(alpha, beta, gamma);
  // document.getElementById("gyrocolor").style.background = makecolor(alpha, beta, gamma);
  // document.getElementById("gyrocolor").style.color = "#FFFFFF";
  // document.getElementById("gyrocolor").style.fontWeight = "bold";

  // document.bgColor = makecolor(arAlpha, arBeta, arGamma);

}, delay);
} 

function loadImageErrorOverride(errEvt) {
  const pic = errEvt.target;
 
  if (!pic.crossOrigin)  return print('Failed to reload ' + pic.src + '!');
 
  print('Attempting to reload it as a tainted image now...');
  pic.crossOrigin = null, pic.src = pic.src;
}


function setup() {
  var myCanvas = createCanvas(350,567);
  myCanvas.parent('forp5');
  airBalloon = new Char();
  // alert("wee");
}

function draw() {
  background(242,242,242);
  airBalloon.move(NORTH,SOUTH,WEST,EAST);
  airBalloon.display();

  text("X:",40,40);
  text(ax,200,40);
  text("Y:",40,70);
  text(ay,200,70);
  text("gamma:",40,100);
  text(gamma,200,100);
  text("beta:",40,130);
  text(beta,200,130);
}

function keyPressed() {
  //redraw();
  var k = keyCode;
  
  if (k == '38'    | k == 'W')   NORTH = true;
  else if (k == '40'  | k == 'S')   SOUTH = true;
  else if (k == '37'  | k == 'A')   WEST  = true;
  else if (k == '39' | k == 'D')   EAST  = true;
}

function keyReleased() {
  var k = keyCode;

  if      (k == '38'    | k == 'W')   NORTH = false;
  else if (k == '40'  | k == 'S')   SOUTH = false;
  else if (k == '37'  | k == 'A')   WEST  = false;
  else if (k == '39' | k == 'D')   EAST  = false;
}

//Class for character
function Char()
{
  this.posx = 0;
  this.posy = 150;
  this.posxspeed = 2;
  this.posyspeed = 2;
  charImage = loadImage(charURL);
  
  //loadImage("img/Balloon.png");
  // move method
  this.move = function()
  {
    if (beta >= 100 )  {
    	if(this.posy > 0)
    	this.posy -= this.posyspeed;
    }
    if (beta < 100)  {
    	if(this.posy < height-130)
    	this.posy += this.posyspeed;
    }
    if (ax >= 0    && gamma <0)   {
    	if(this.posx > 0)
    	this.posx -= this.posxspeed;
    }
    if (ax >=0    && gamma >=0)   {
    	if(this.posx < width-130)
    	this.posx += this.posxspeed;
    }
  }
  this.display = function()
  {
  	strokeWeight(50);
  	image(charImage,this.posx+this.posxspeed,this.posy+this.posyspeed);
  	// ellipse(this.posx+this.posxspeed, this.posy+this.posyspeed,30);
  	// charImage = loadImage("img/Balloon.png");
  	// charImage = createImg(charURL);
  	//charImage = createImage(charURL);
  	
  }
}