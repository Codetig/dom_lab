// Your code here
function start(){
window.addEventListener("load", runAll);
}

function chgHeader(){
	document.getElementById("greeting").innerHTML = "Hello, Planet Earth!";
}
start(chgHeader);

function chgLiBkg(){
	var tags = document.getElementsByTagName("li");
	for (var i = 0; i < tags.length; i++) {
		tags[i].style.backgroundColor = "yellow";
	}
}

function remSel(){
	var tags = document.getElementsByTagName("li");
	for (var i = 0; i < tags.length; i++) {
		tags[i].setAttribute("class", "");
	}
	document.getElementsByTagName("img")[0].setAttribute("src", "./images/panic.jpeg");
}

function setAtt(){
	var tags = document.getElementsByTagName("li");
	for (var i = 0; i < tags.length; i++) {
		tags[i].addEventListener("click", function(){
			event.target.setAttribute("class", "selected");
			document.getElementsByTagName("img")[0].setAttribute("src", "./images/"+ event.target.innerHTML +".jpeg");

		});
	}
		}

function reset(){
	var btn = document.getElementById("reset");
	btn.addEventListener("click", remSel);
}

function runAll(){
	chgHeader();
	chgLiBkg();
	document.getElementById("essentials").addEventListener("click", setAtt);
	reset();
}
start();