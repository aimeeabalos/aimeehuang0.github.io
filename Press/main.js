var sourceText = "Life is short and art long  weather translate maps news calculator youtube dictionary translator movies restaurants speed test horoscope games calendar quotes social security spanish earth table season halloween cheap cars happy birthday reverse phone battery backup directions drive pizza english finder home flights jobs mp3 internet facebook twitter NYTimes US currency picturese drive online browser search google";
var words = sourceText.split(" ");
var positiveText ="consistency creativity dedication effort empowerment investing learning open-minded opportunity perseverance prosperous teaching vision resiliency attitude character endurance lucky";
var pwords = positiveText.split(" ");
var searchWordNo,assignW,assignH,searchWord; 
  

function setup() {
  createCanvas(1000, 400);
  noLoop();
}

function draw() {
  background(230);
  textSize(20);
  textAlign(CENTER, CENTER);
  for (var i = 0; i < words.length; i++) {
    fill(random(255));
    text(words[i], random(width), random(height));
  }
  searchWordNo = Math.floor(random(pwords.length));
  // alert(searchWordNo);
  searchWord = pwords[searchWordNo];
  assignW = random(width);
  assignH = random(height);
  // fill(255,0,0);
  text(searchWord, assignW, assignH);
  document.getElementById("keyWord").innerHTML = searchWord;
  // alert(assignW+" - "+assignH);
}

function mousePressed(){
	if(mouseX>(assignW-50) && mouseX<(assignW+50) && mouseY>(assignH-10) && mouseY<(assignH+10))
	{
		alert("Found it!");
		redraw();
	}
	else if(mouseX>=0 && mouseX<=1000 && mouseY>0 && mouseY<400)
	{
		alert("Try Again");
		// alert(mouseX+" - "+mouseY);
	}
}