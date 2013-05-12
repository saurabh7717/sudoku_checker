window.onload = init;

function init(){
	$("#sudoku").hide("normal");
}

function start(){
	$("#sudoku").slideDown("fast");
	$("#start").hide("fast");
	initAll();
}
function initAll(){
	if(document.getElementById){
		inputVal();
		setStyle();
	}
	else{
		alert("Javascript not supported");
	}
}

function inputVal(){
	var x = getRandomSudoku();
	displayInputForSudoku(x);
}

function checkCorrection(){
	changeToDefaultColor();
	if(checkInput() && checkRow() && checkColumn() && check3by3Box()){
		alert("correct");
	}
	else{
		alert("error");
	}
}

function getRandomSudoku(){
	return 0;
	//return Math.floor(Math.random()*5);
}

function displayInputForSudoku(m){
	switch(m)
	{
		case 0:
			document.getElementById("square4").innerHTML = 2;
			document.getElementById("square5").innerHTML = 6;
			document.getElementById("square7").innerHTML = 7;
			document.getElementById("square9").innerHTML = 1;
			document.getElementById("square10").innerHTML = 6;
			document.getElementById("square11").innerHTML = 8;
			document.getElementById("square14").innerHTML = 7;
			document.getElementById("square17").innerHTML = 9;
			document.getElementById("square19").innerHTML = 1;
			document.getElementById("square20").innerHTML = 9;
			document.getElementById("square24").innerHTML = 4;
			document.getElementById("square25").innerHTML = 5;
			document.getElementById("square28").innerHTML = 8;
			document.getElementById("square29").innerHTML = 2;
			document.getElementById("square31").innerHTML = 1;
			document.getElementById("square35").innerHTML = 4;
			document.getElementById("square39").innerHTML = 4;
			document.getElementById("square40").innerHTML = 6;
			document.getElementById("square42").innerHTML = 2;
			document.getElementById("square43").innerHTML = 9;
			document.getElementById("square47").innerHTML = 5;
			document.getElementById("square51").innerHTML = 3;
			document.getElementById("square53").innerHTML = 2;
			document.getElementById("square54").innerHTML = 8;
			document.getElementById("square57").innerHTML = 9;
			document.getElementById("square58").innerHTML = 3;
			document.getElementById("square62").innerHTML = 7;
			document.getElementById("square63").innerHTML =	4;
			document.getElementById("square65").innerHTML = 4;
			document.getElementById("square68").innerHTML = 5;
			document.getElementById("square71").innerHTML = 3;
			document.getElementById("square72").innerHTML = 6;
			document.getElementById("square73").innerHTML = 7;
			document.getElementById("square75").innerHTML = 3;
			document.getElementById("square77").innerHTML = 1;
			document.getElementById("square78").innerHTML = 8;
			
			break;
		case 1:
		case 2:
		case 3:
		case 4:
		default:
			alert("123");
	}
}

function setStyle(){
	for(var i=1;i<10;i++){
		document.getElementById("square"+i).style.borderTop = "3px solid red";
	}
	for(var i=73;i<82;i++){
		document.getElementById("square"+i).style.borderBottom = "3px solid red";
	}
	for(var i=1;i<82;i=i+9){
		document.getElementById("square"+i).style.borderLeft = "3px solid red";
	}
	for(var i=3;i<82;i=i+9){
		document.getElementById("square"+i).style.borderRight = "3px solid red";
	}
	for(var i=6;i<82;i=i+9){
		document.getElementById("square"+i).style.borderRight = "3px solid red";
	}
	for(var i=9;i<82;i=i+9){
		document.getElementById("square"+i).style.borderRight = "3px solid red";
	}
	for(var i=19;i<28;i++){
		document.getElementById("square"+i).style.borderBottom = "3px solid red";
	}
	for(var i=46;i<55;i++){
		document.getElementById("square"+i).style.borderBottom = "3px solid red";
	}
}
function checkInput(){
	for(var i=1;i<82;i++){
		if(document.getElementById("i"+i)){
			if(isNaN(document.getElementById("i"+i).value) || (document.getElementById("i"+i).value == "" || parseInt(document.getElementById("i"+i).value) == 0)){
				highlightError(i);
				return false;
			}
		}
		else if(document.getElementById("square"+i)){}
		else{
			highlightError(i);
			return false;
		}
				
	}
	return true;
}

function checkRow(){
	var sum = 0;
	for(var i=1;i<82;i++){
		var x = document.getElementById("i"+i);
		if(x){
			sum = parseInt(sum) + parseInt(x.value,10);
			
		}
		else{
			sum = parseInt(sum) + parseInt(document.getElementById("square"+i).innerHTML,10);
		}
		if((parseInt(i)%9) == 0){
			if(sum != 45){
				highlightErrorRow((parseInt(i)-8));
				return false;
			}
			sum = 0;
		}
	}
	return true;	
	
}

function checkColumn(){
	var sum = 0;
	for(var i=1;i<10;i++){
		for(var j=i;j<82;j=j+9){
			var x = document.getElementById("i"+j);
			if(x){
				sum = parseInt(sum) + parseInt(x.value,10);
			}
			else{
				sum = parseInt(sum) + parseInt(document.getElementById("square"+j).innerHTML,10);
			}
		}
		if(sum != 45){
			highlightErrorColumn(parseInt(i));
			return false;
		}
		sum = 0;
	}
		return true;
}

function check3by3Box(){
	var sum = 0;
	for(var k=0;k<3;k++){
		for(var i=(27*k)+1;i<(27*k)+10;i++){
			for(var j=i;j<(27*k)+1+27;j=j+9){
				var x = document.getElementById("i"+j);
				if(x){
					sum = parseInt(sum) + parseInt(x.value,10);
				}
				else{
					sum = parseInt(sum) + parseInt(document.getElementById("square"+j).innerHTML,10);
				}
			}
			if((parseInt(i)%3) == 0){
				if(sum != 45){
					//alert('f');
					return false;
				}
				sum = 0;
			}
		}
		sum = 0;
	}
	return true;
}

function highlightErrorRow(r){
	var x = r;
	for(var i=r;i<x+9;i++){
		var a = document.getElementById("i"+i);
		if(a){
			a.style.backgroundColor = "#ADD8E6";
		}
	}
}

function highlightErrorColumn(c){
	var x = c;
	for(var i=c;i<82;i=i+9){
		var a = document.getElementById("i"+i);
		if(a){
			a.style.backgroundColor = "#ADD8E6";
		}
	}
}

function changeToDefaultColor(){
	for(var i=1;i<82;i++){
		var x = document.getElementById("i"+i)
		if(x){
			x.style.backgroundColor = "white";
		}
	}
}

function highlightError(i){
	document.getElementById("i"+i).style.backgroundColor = "#ADD8E6";
}