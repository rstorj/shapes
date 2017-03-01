window.onload = function(){
	generateElements();
	
	var button1 = document.getElementById("changecolors");
	button1.addEventListener("click", changeColor);
	
	var button2 = document.getElementById("addsquare");
	button2.addEventListener("click", addSquares);

	var button3 = document.getElementById("addcircle");
	button3.addEventListener("click", addCircles);

	var button4 = document.getElementById("clear");
	button4.addEventListener("click", clear);

	var button5 = document.getElementById("reset");
	button5.addEventListener("click", reset);
}
var color = "#000000";
var width = 0 + "px";

function reset(){
	
	generateElements();
}

function clear(){
	var parent = document.getElementById("shapearea");
	var nodeList = document.getElementById("shapearea").childNodes;
	var length = document.getElementById("shapearea").childNodes.length;
	for(var i = 4; i < length; i++){
		parent.removeChild(nodeList[13]);
	}
	
}

function breakEverything(){

}

function changeColor(e){
	var specialShape = document.getElementById("shapearea").childNodes;
	var length = document.getElementById("shapearea").childNodes.length;
	for(var i = 13; i < length; i++){
		generateColor();
		specialShape[i].style.background = color;
	}
	
}

function popOut(){
 	var child = this;
 	var parent = document.getElementById("shapearea");
 	parent.removeChild(child);
 	parent.appendChild(child);
}

function disappear(){
	var child = this;
	var parent = document.getElementById("shapearea");
	parent.removeChild(child);
}

function generateElements(){
	var numElements = parseInt(Math.random() * 20)+20;

	for(var i = 0; i < numElements; i++){ 
		addSquares();
		addCircles();
	}
}

function generateSize(){
	width = (parseInt(Math.random() * 100)+10) + "px";
}

function generateColor(){
	var C = (parseInt(Math.random() * 12)+1);

	if (C == 1){
		color = "#0D5BFF"
	} else if (C ==2){
		color = "#0C8DE8"
	} else if (C ==3){
		color = "#00D9FF"
	} else if (C ==4){
		color = "#0CE8CD"
	} else if (C ==5){
		color = "#0DFF9D"
	} else if (C ==6){
		color = "#FF5D0D"
	} else if (C ==7){
		color = "#FF5D0D"
	} else if(C == 8){
		color = "#E8350C"
	} else if (C == 9){
		color = "#FF0A00"
	} else if (C== 10){
		color = "#E80C5B"
	} else if (C == 11){
		color = "#FF0DDE"
	} else if (C == 12){
		color = "#FFF400"
	}
}

function addSquares(){
	var shapeX = parseInt(Math.random()*400) + "px";
	var shapeY = parseInt(Math.random()*600) + "px";
	var square = document.createElement(square);
	generateSize();
	generateColor();
	square.className = "square";
	square.style.background = color;
	square.style.width = width;
	square.style.height = width;
	square.style.left = shapeX;
	square.style.top = shapeY;
	square.addEventListener("click", popOut);
	square.addEventListener("dblclick", disappear);

	var graphicsArea = document.getElementById("shapearea");
	graphicsArea.appendChild(square);
}

function addCircles(){
	var shapeX = parseInt(Math.random()*400) + "px";
	var shapeY = parseInt(Math.random()*600) + "px";
	var circle = document.createElement(circle);
	generateSize();
	generateColor();
	circle.className = "circle";
	circle.style.background = color;
	circle.style.width = width;
	circle.style.height = width;
	circle.style.left = shapeX;
	circle.style.top = shapeY;
	circle.addEventListener("click", popOut);
	circle.addEventListener("dblclick", disappear);

	var graphicsArea = document.getElementById("shapearea");
	graphicsArea.appendChild(circle);
}