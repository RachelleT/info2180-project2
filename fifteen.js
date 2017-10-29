window.onload = function() {
	let puzzlePiece = document.getElementById("puzzlearea").children;
	let puzzleArea = document.getElementById("puzzlearea");
	//console.log(puzzlePiece);

	for (let i=0; i<puzzlePiece.length; i++){
		puzzlePiece[i].className = "puzzlepiece";
	}

	let positionx = 0;
	let positiony = 0;
	let positionbgx = 0;
	let positionbgy = 0;

//first row
	for (i=0; i<=3; i++){
		if (i==0){
			puzzlePiece[i].style.left = '0px';
			//positionbgx.style.backgroundPosition = '0px 0px';
			continue;
		}
		positionx += 100;
		//positionbgx += 100;
		puzzlePiece[i].style.left = positionx + 'px';
		//puzzlePiece[i].style.backgroundPosition = '${positionbgx + 'px'} ${positionbgy + 'px'}';
		}
	}

//second row
	positionx += 0;
	positiony += 100;
	positionbgx += 0;
	positionbgy += 100;

	for (let i=4; i<=7; i++){
		if (i==4){
			puzzlePiece[i].style.left = "0px";
			puzzlePiece[i].style.top = positiony + "px";
			//positionbgx.style.backgroundPosition = '${positionbgx + 'px'} ${positionbgy + 'px'}';
			continue;
		}
		positionx += 100;
		//positionbgx += 100;
		puzzlePiece[i].style.top = positiony + 'px';
		puzzlePiece[i].style.left = positionx + 'px';
		//puzzlePiece[i].style.backgroundPosition = '${positionbgx + 'px'} ${positionbgy + 'px'}';
	}