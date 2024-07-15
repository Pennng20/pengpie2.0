function showLarge(e){
	let small = e.target;
	document.getElementById("large").src = small.src;
}

function init(){
	// let smalls = document.querySelectorAll("#smallpic img");
	let smalls = document.getElementsByClassName("pic-s");
	for(let i=0; i<smalls.length; i++){
		smalls[i].onclick = showLarge;
	}
}

window.addEventListener("load", init, false);